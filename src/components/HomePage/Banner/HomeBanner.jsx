import Image from "next/image";
import BannerImg from "@/asserts/banner-img.png";

const HomeBanner = () => {
  return (
    <div className="md:flex mt-12">
      <div className="md:w-1/3">
        <Image
          src={BannerImg}
          alt="picture of JOb Category"
          width={390}
          height={100}
          className=""
        ></Image>
      </div>
      <div className="md:w-2/3 my-14 md:ml-8 p-8 flex items-center">
        <h2 className="text-4xl font-semibold">
          Explore some Opportunities with Our Job Recruiting Services to Unlock Your
          Career Potential!
        </h2>
      </div>
    </div>
  );
};

export default HomeBanner;
