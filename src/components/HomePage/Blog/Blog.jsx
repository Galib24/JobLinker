'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import bImg1 from "@/asserts/blogs/blog1.jpeg";
import bImg2 from "@/asserts/blogs/blog2.webp";
import bImg3 from "@/asserts/blogs/blog3.jpg";
import bImg4 from "@/asserts/blogs/blog4.jpg";
import bImg5 from "@/asserts/blogs/blog5.jpg";

import aImg1 from "@/asserts/blog-author/author1.jpg";
import aImg2 from "@/asserts/blog-author/author2.jpg";
import aImg3 from "@/asserts/blog-author/author3.jpg";
import aImg4 from "@/asserts/blog-author/author4.jpg";
import aImg5 from "@/asserts/blog-author/author5.jpg";


const Blog = () => {
    return (
        <div className='px-8'>
            <h2 className="text-3xl font-bold mt-24 mb-3 text-center">Latest Blog</h2>
            <p className="text-center font-medium">We Do Care Our Client, Because Customer priority is our Goal</p>

            <div className=' mt-8'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={bImg1} alt=''></Image>
                        <div>
                            <div className='flex items-center  mb-4'>
                                <div>
                                    <Image className=' rounded-full  mt-5 w-12' src={aImg1} alt=''></Image>
                                </div>
                                <div className='ml-2'>
                                    <h1 className=' text-xl font-bold mt-5 '>Addison Kobe</h1>
                                    <FaStar className='  text-amber-300  mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStarHalfAlt className=' text-amber-300'></FaStarHalfAlt>
                                </div>
                            </div>
                            <h2 className=' text-base font-bold'>Web developer</h2>
                            <p className=' w-80  text-zinc-500'>The success of every websites now depends on search engine optimisation and digital marketing strategy...</p>
                            <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={bImg2} alt=''></Image>

                        <div>
                            <div className='flex items-center  mb-4'>
                                <div >
                                    <Image className=' rounded-full  mt-5 w-12' src={aImg2} alt=''></Image>
                                </div>
                                <div className='ml-2'>
                                    <h1 className=' text-xl font-bold mt-5'>Mathias Henry</h1>
                                    <FaStar className=' text-amber-300  mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300'></FaStar>
                                </div>
                            </div>
                            <h2 className=' text-base font-bold'>Frontend web developer</h2>
                            <p className=' w-80  text-zinc-500'>If debugging is the process of removing software bugs, then programming must be the process of putting them in...</p>
                            <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={bImg3} alt=''></Image>
                        <div>
                            <div className='flex items-center  mb-4'>
                                <div>
                                    <Image className=' rounded-full mt-5 w-12' src={aImg3} alt=''></Image>
                                </div>
                                <div className='ml-2'>
                                    <h1 className=' text-xl font-bold mt-5'>Tristin Eli</h1>
                                    <FaStar className=' text-amber-300  mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStarHalfAlt className=' text-amber-300 mr-1'></FaStarHalfAlt>
                                    <FaStarHalfAlt className=' text-amber-300'></FaStarHalfAlt>
                                </div>
                            </div>
                            <h2 className=' text-base font-bold'>Data Analytics</h2>
                            <p className=' w-80  text-zinc-500'>Data are just summaries of thousands of stories—tell a few of those stories to help make the data meaningful...</p>
                            <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={bImg4} alt=''></Image>
                        <div>
                            <div className='flex items-center  mb-4'>
                                <div>
                                    <Image className=' rounded-full  mt-5 w-12' src={aImg4} alt=''></Image>
                                </div>
                                <div className='ml-2'>
                                    <h1 className=' text-xl font-bold mt-5'>Mary R. Phillips</h1>
                                    <FaStar className=' text-amber-300  mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300'></FaStar>
                                </div>
                            </div>
                            <h2 className=' text-base font-bold'>Software Engineer</h2>
                            <p className=' w-80  text-zinc-500'>Good programmers know what to write. Great ones know what to rewrite and reuse...</p>
                            <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={bImg5} alt=''></Image>
                        <div>
                            <div className='flex items-center mb-4'>
                                <div>
                                    <Image className=' rounded-full  mt-5 w-12' src={aImg5} alt=''></Image>
                                </div>
                                <div className='ml-2'>
                                    <h1 className=' text-xl font-bold mt-5'>Steven D. Wheeler</h1>
                                    <FaStar className=' text-amber-300  mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStar className=' text-amber-300 mr-1'></FaStar>
                                    <FaStarHalfAlt className=' text-amber-300'></FaStarHalfAlt>
                                </div>
                            </div>
                            <h2 className=' text-base font-bold'>Data Science </h2>
                            <p className=' w-80  text-zinc-500'>Things get done only if the data we gather can inform and inspire those in a position to make a difference...</p>
                            <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Blog;