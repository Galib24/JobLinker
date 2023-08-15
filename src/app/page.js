import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import FeaturedJobs from "@/components/HomePage/FeaturedJobs/FeaturedJobs";
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

      {/* feature job section */}
      <FeaturedJobs></FeaturedJobs>

      {/* Jobs Banner section */}
      <JobsBanner></JobsBanner>
    </div>
  );
}
