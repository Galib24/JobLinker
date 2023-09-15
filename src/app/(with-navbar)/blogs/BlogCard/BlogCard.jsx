import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const BlogCard = ({ blog }) => {
  const { blogTitle, blogPhoto, blogDetails } = blog
  return (
    <div className="shadow-sm pb-5 rounded-lg hover:shadow-md duration-300 mx-5 my-20">
      <div className="cursor-pointer">
        <Image
          width={500}
          height={500}
          alt="img"
          src={blogPhoto}
          className="w-full rounded-t-lg"
        />
      </div>

      {/* like */}
      <div className="px-3 py-3 bg-white shadow-lg w-20 h-20 text-center items-center rounded-full text-lg relative bottom-16 right-5 cursor-pointer hover:shadow-xl duration-300">
        <AiOutlineHeart className="text-2xl font-bold text-gray-600" />
        <p className="text-base text-gray-500 font-medium">199</p>
      </div>
      {/* like */}

      {/* blog title */}
      <div>
        <h2 className="text-3xl font-bold hover:text-blue-500 duration-300 cursor-pointer pl-2">{blogTitle}</h2>
      </div>
      {/* blog title */}

      {/* user img and name and date */}
      <div className="mt-4 flex gap-3 items-center font-medium cursor-pointer pl-2">
        <Image
          width={35}
          height={35}
          alt="user img"
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740"
          className="rounded-full"
        />
        <span>JANE SMITH</span>
        <span>NOVEMBER 3, 2018</span>
        <span>TRAVEL</span>
      </div>
      {/* user img and name and date */}

      {/* description */}
      <p className="text-xs lg:text-lg mt-5 text-gray-800 pl-3 font-semibold">{blogDetails}....</p>
      {/* description */}
      {/* icon */}
      <div className="flex gap-4 text-2xl mt-4 cursor-pointer pl-2">
        <BiLogoFacebook className="hover:text-amber-400 duration-300" />
        <BiLogoInstagram className="hover:text-amber-400 duration-300" />
        <BiLogoLinkedin className="hover:text-amber-400 duration-300" />
        <BiLogoTwitter className="hover:text-amber-400 duration-300" />
      </div>
      {/* icon */}
    </div>
  );
};

export default BlogCard;