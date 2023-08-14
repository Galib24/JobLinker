import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import FeaturedJobs from "@/components/HomePage/FeaturedJobs/FeaturedJobs";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <HomeBanner></HomeBanner>

      {/* Popular job category section */}
      <JobCategories></JobCategories>

      {/* Featured Jobs Section */}
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
}
