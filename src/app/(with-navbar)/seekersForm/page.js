"use client";

import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const img_hosting_tkn = "81a7c8422a28322c0f8454a153fd86b4";

const SeekersForm = () => {
  const { user } = useContext(AuthContext);

  // img hosting url link
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_tkn}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const {
      seekerName,
      findingJobTitle,
      education,
      jobExperience,
      seekerEmail,
      seekerJobTime,
      skillOne,
      skillTwo,
      skillThree,
      image,
    } = data;

    // take out logo to host in imgBB
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const seekerPhoto = imgRes.data.display_url;
          //   console.log(companyLogo);

          const newData = {
            seekerName,
            findingJobTitle,
            education,
            jobExperience,
            seekerEmail,
            seekerJobTime,
            skills: {
              skillOne,
              skillTwo,
              skillThree,
            },
            image: seekerPhoto,
          };
          // console.log(newData);

          // send seeker job to db
          seekerJobPost(newData);
        }
      });

    // function to post data to database
    const seekerJobPost = async (newData) => {
      try {
        const response = await fetch("/api/seeker", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newData),
        });

        if (response.ok) {
          toast.success("Seeker Job added to DB");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  return (
    <div>
      <div>
        <BannerComponent
          headingTitle="Seeking A Job"
          pageName="Get Ready to Hired!"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-2 lg:mx-5 mt-10 p-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                {...register("seekerName", { required: true })}
              />
            </div>

            {/* Job Title Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="JobTitle"
                className="input input-bordered"
                {...register("findingJobTitle", { required: true })}
              />
            </div>

            {/* Education Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education Qualification</span>
              </label>
              <input
                type="text"
                name="education"
                className="input input-bordered"
                {...register("education", { required: true })}
              />
            </div>

            {/* Experience Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Experience</span>
              </label>
              <input
                type="number"
                name="experience"
                className="input input-bordered"
                {...register("jobExperience", { required: true })}
              />
            </div>

            {/* Seeker Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seeker Email </span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user ? user.email : ""}
                className="input input-bordered"
                {...register("seekerEmail", { required: true })}
              />
            </div>

            {/* Job Type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                className="input input-bordered"
                {...register("seekerJobTime", { required: true })}
              >
                <option selected disabled>
                  Pick One
                </option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>

            {/* Top three skills */}
            <div className="grid lg:grid-cols-4 gap-5 w-full items-center">
              <p className="font-semibold">Type Your Top Three Skills:</p>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">SkillOne*</span>
                </label>
                <input
                  type="text"
                  name="SkillOne"
                  className="input input-bordered"
                  {...register("skillOne", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">SkillTwo*</span>
                </label>
                <input
                  type="text"
                  name="SkillTwo"
                  className="input input-bordered"
                  {...register("skillTwo", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">SkillThree*</span>
                </label>
                <input
                  type="text"
                  name="SkillThree"
                  className="input input-bordered"
                  {...register("skillThree", { required: true })}
                />
              </div>
            </div>

            {/* Image Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                {...register("image", { required: true })}
              />
            </div>
          </div>

          {/* About Myself field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">About Yourself</span>
            </label>
            <textarea
              name="about"
              className="textarea textarea-bordered h-24"
              {...register("aboutMyself", { required: true })}
              placeholder="Write something about you..."
            ></textarea>
          </div>

          {/* submit button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-info btn-block text-white "
              value="Submit Post"
            />
          </div>
        </form>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default SeekersForm;
