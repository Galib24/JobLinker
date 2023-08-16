import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import FeaturedJobs from "@/components/HomePage/FeaturedJobs/FeaturedJobs";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import JobSeekers from "@/components/HomePage/JobSeekers/JobSeekers";
import JobsBanner from "@/components/HomePage/JobsBanner/JobsBanner";
import TestimonialSection from "@/components/HomePage/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <HomeBanner></HomeBanner>

      {/* Popular job category section */}
      <JobCategories></JobCategories>

      {/* feature job section */}
      <FeaturedJobs></FeaturedJobs>

      {/* Seeker Post Section */}
      <JobSeekers></JobSeekers>

      {/* Jobs Banner section */}
      <JobsBanner></JobsBanner>

      {/* Testimonial section */}
      <TestimonialSection></TestimonialSection>
    </div>
  );
}
