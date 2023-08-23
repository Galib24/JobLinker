"use client"
import HomeBanner from "@/components/HomePage/Banner/HomeBanner";
import JobCategories from "@/components/HomePage/JobCategories/JobCategories";
import JobSeekers from "@/components/HomePage/JobSeekers/JobSeekers";
import JobsBanner from "@/components/HomePage/JobsBanner/JobsBanner";
import SponsorShip from "@/components/HomePage/SponsorShip/SponsorShip";
import Image from "next/image";
import TestimonialSection from "@/components/HomePage/TestimonialSection/TestimonialSection";


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])


  return (
    <div>
    
      {/* Banner Section */}
      <HomeBanner></HomeBanner>

      {/* Popular job category section */}
      <JobCategories></JobCategories>
    </div>
  );
}
