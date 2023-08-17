import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import Blog from "@/components/HomePage/Blog/Blog";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import JobsBanner from "@/components/HomePage/JobsBanner/JobsBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <HomeBanner></HomeBanner>

      {/* Popular job category section */}
      <JobCategories></JobCategories>

      {/* Jobs Banner section */}
      <JobsBanner></JobsBanner>

       {/* Jobs Banner section */}
       <Blog></Blog>
    </div>
  );
}
