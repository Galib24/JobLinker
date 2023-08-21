'use client'
import dataOfBlog from "@/Data/blog"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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

                // responsive breakpoint
                    breakpoints={{
                        0:{
                            slidesPerView:1,
                            spaceBetween:10,
                        },
                        620:{
                            slidesPerView:2,
                            spaceBetween:10,
                        }
                        ,
                        840:{
                            slidesPerView:3,
                            spaceBetween:20,
                        }
                    }}
                >
                        {
                        dataOfBlog.map(item =>  <SwiperSlide  key={item.id}>
                            <Image width={500} height={500}  src={item?.image} alt=''></Image>
                            <div>
                                <div className='flex items-center  mb-4'>
                                    <div>
                                        <Image className='rounded-full mt-5' width={40} height={40} src={item?.authorImage} alt=''></Image>
                                    </div>
                                    <div className='ml-2'>
                                        <h1 className=' text-xl font-bold mt-5 '>{item?.name}</h1>
                                        <FaStar className='  text-amber-300  mr-1'></FaStar>
                                        <FaStar className=' text-amber-300 mr-1'></FaStar>
                                        <FaStar className=' text-amber-300 mr-1'></FaStar>
                                        <FaStar className=' text-amber-300 mr-1'></FaStar>
                                        <FaStarHalfAlt className=' text-amber-300'></FaStarHalfAlt>
                                    </div>
                                </div>
                                <h2 className=' text-base font-bold'>{item?.jobRole}</h2>
                                <p className=' w-72  text-zinc-500'>{item?.jobDescription}</p>
                                <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'>Read More</button>
                            </div>

                        </SwiperSlide>) 
                        }
                </Swiper>
            </div>
        </div>
    );
};

export default Blog;