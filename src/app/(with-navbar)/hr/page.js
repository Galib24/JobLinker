"use client";

import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const img_hosting_tkn = "a272d7fb3d5b5ee711a07f62d1b2c93f";

const HRFormPage = () => {
  const { user } = useContext(AuthContext);

  // img hosting url link
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_tkn}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onsubmit function for react hook form
  const onSubmit = (data) => {
    // console.log(data);
    const {
      jobTitle,
      HrEmail,
      jobPlace,
      location,
      salaryRange,
      jobType,
      rating,
      jobDescription,
      companyDetails,
    } = data;

    // take out logo to host in imgBB
    const formData = new FormData();
    formData.append("image", data.companyLogo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const companyLogo = imgRes.data.display_url;
          //   console.log(companyLogo);

          const newJobPost = {
            jobTitle,
            companyLogo,
            HrEmail,
            jobPlace,
            location,
            salaryRange: `$${parseFloat(salaryRange) - 40} - $${parseFloat(salaryRange) + 40
              } / month`,
            jobType,
            jobNeed: "Urgent",
            rating: parseFloat(rating),
            jobDescription,
            companyDetails,
          };

          // send hr job to db
          hrJobPost(newJobPost);
        }
      });

    // function to post data to database
    const hrJobPost = async (newJobPost) => {
      try {
        const response = await fetch("/api/hr", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newJobPost),
        });

        if (response.ok) {
          toast.success("HR Job added to DB");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  return (
    <div>
      <div
        className="bg-indigo-50">
        {/* using a banner in the top of the page */}
        <BannerComponent headingTitle="Post Your Jobs" pageName="HR" />
      </div>

      {/* Form For HR Jobs Post */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-20 mt-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Title Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Title*</span>
            </label>
            <input
              type="text"
              placeholder="job title"
              {...register("jobTitle", { required: true, maxLength: 80 })}
              className="w-full p-2 rounded border-[1px] border-black"
            />
            {errors.jobTitle?.type === "required" &&
              toast.error("Provide job title")}
          </div>

          {/* Company Logo Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company Logo*</span>
            </label>
            <input
              type="file"
              placeholder="company logo"
              {...register("companyLogo", { required: true, maxLength: 80 })}
              className="w-full p-2 rounded"
            />
            {errors.companyLogo?.type === "required" &&
              toast.error("Provide company logo")}
          </div>

          {/* HR Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Email*</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              defaultValue={user ? user.email : ""}
              {...register("HrEmail", { required: true, maxLength: 80 })}
              className="w-full p-2 rounded border-[1px] border-black"
            />
            {errors.HrEmail?.type === "required" &&
              toast.error("Provide your email")}
          </div>

          {/* jobPlace Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Type*</span>
            </label>
            <select
              className="w-full p-2 rounded border-[1px] border-black"
              {...register("jobPlace", { required: true })}
            >
              {/* <option disabled selected>
                Pick one
              </option> */}
              <option>Remote</option>
              <option>Onside</option>
              <option>Hybrid</option>
            </select>
            {errors.jobPlace?.type === "required" &&
              toast.error("Provide job type")}
          </div>

          {/* Location Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Location*</span>
            </label>
            <input
              type="text"
              placeholder="job location"
              {...register("location", { required: true })}
              className="w-full p-2 rounded border-[1px] border-black"
            />
            {errors.location?.type === "required" &&
              toast.error("Provide job location")}
          </div>

          {/* Salary Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Salary*</span>
            </label>
            <input
              type="number"
              placeholder="$ monthly salary"
              {...register("salaryRange", { required: true })}
              className="w-full p-2 rounded border-[1px] border-black"
            />
            {errors.salaryRange?.type === "required" &&
              toast.error("Provide job salary")}
          </div>

          {/* Job Time Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Duration*</span>
            </label>
            <select
              className="w-full p-2 rounded border-[1px] border-black"
              {...register("jobType", { required: true })}
            >
              {/* <option disabled selected>
                Pick one
              </option> */}
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
            {errors.jobType?.type === "required" &&
              toast.error("Provide job duration")}
          </div>

          {/* Rating Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Rating*</span>
            </label>
            <input
              type="number"
              placeholder="rating"
              {...register("rating", { required: true })}
              className="w-full p-2 rounded border-[1px] border-black"
            />
            {errors.rating?.type === "required" &&
              toast.error("Provide job rating")}
          </div>

          {/* field done */}
        </div>

        {/* job description Field */}
        <div className="form-control flex flex-col mt-6">
          <label className="label">
            <span className="label-text font-semibold">Job Description*</span>
          </label>
          <textarea
            name="jobDescription"
            id=""
            cols="30"
            rows="4"
            {...register("jobDescription", { required: true })}
            className="bg-transparent border-[1px] p-2 rounded border-black"
          ></textarea>
          {errors.jobDescription?.type === "required" &&
            toast.error("Provide job description")}
        </div>

        {/* Company details Field */}
        <div className="form-control flex flex-col mt-6">
          <label className="label">
            <span className="label-text font-semibold">Company Details*</span>
          </label>
          <textarea
            name="companyDetails"
            id=""
            rows="2"
            {...register("companyDetails", { required: true })}
            className="bg-transparent border-[1px] p-2 rounded border-black"
          ></textarea>
          {errors.companyDetails?.type === "required" &&
            toast.error("Provide job company details")}
        </div>

        {/* Submit Button */}
        <div className="text-center my-10">
          <input
            className="btn bg-[#40e1f9] px-10 p-2 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300"
            type="submit"
            value="Post"
          />
        </div>
      </form>
    </div>
  );
};

export default HRFormPage;
