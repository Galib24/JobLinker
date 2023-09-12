"use client"
import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import JobSeekers from "@/components/HomePage/JobSeekers/JobSeekers";
import JobsBanner from "@/components/HomePage/JobsBanner/JobsBanner";
import SponsorShip from "@/components/HomePage/SponsorShip/SponsorShip";
import TestimonialSection from "@/components/HomePage/TestimonialSection/TestimonialSection";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from "@/components/HomePage/Blog/Blog";
import FeaturedJobs from "@/components/HomePage/FeaturedJobs/FeaturedJobs";
import ContactFrom from "@/components/HomePage/ContactFrom/ContactFrom";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);


  return (
    <div>

      {/* Banner Section /} */}

      <HomeBanner />

      {/* {/ Popular job category section /} */}
      <JobCategories />

      {/* {/ feature job section /} */}
      <FeaturedJobs />

      {/* {/ Seeker Post Section /} */}
      <JobSeekers />

      {/* {/ Jobs Banner section /} */}
      <JobsBanner />

      {/* {/SponsorShip section /} */}
      <SponsorShip />

      {/* {/ Jobs Blog section /} */}

      <Blog />

      {/* Testimonial section */}
      <TestimonialSection />


      <ContactFrom></ContactFrom>

    </div>
  );
}
