'use client'
import dataArray from "@/Data/testimonialData";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { BsFillPersonFill, BsFillStarFill } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const TestimonialSection = () => {
    // console.log(dataArray);
    return (
        <div
            className="bg-blue-50">
            <div
                className="px-10 container mx-auto pb-10 pt-5 my-10">
                <div
                    className="mb-10">
                    <h2
                        className="lg:text-3xl font-bold mt-20 mb-3 text-center">
                        Testimonials From Our Customers
                    </h2>
                    <p
                        className="text-center font-semibold text-gray-500">
                        What do Our Customers say
                    </p>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        620: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        }
                        ,
                        840: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}

                >
                    {
                        dataArray.map(item =>
                            <SwiperSlide
                                key={item.name}>
                                <div
                                    className="testimonial shadow-lg">
                                    <div
                                        className="testimonial-img">
                                        <Image
                                            width={0}
                                            height={0}
                                            className="rounded-full"
                                            src={item.img}
                                            alt=""
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div>

                                    <p
                                        className="mt-12 text-gray-500 font-medium text-sm text-center">
                                        {item?.review}
                                    </p>
                                    <div
                                        className="md:flex justify-between mt-1 text-gray-700">
                                        <h1
                                            className="mt-3 font-semibold flex items-center justify-center"><BsFillPersonFill className="text-2xl text-amber-300 mb-1 mr-1" />{item?.name}
                                        </h1>
                                        <p
                                            className="mt-3 font-semibold flex items-center justify-center"><MdOutlineWorkspacePremium className="text-2xl text-amber-300 mb-1" /> {item?.jobRole}
                                        </p>
                                        <p
                                            className="mt-3 font-semibold flex items-center justify-center"><BsFillStarFill className="text-lg text-amber-300 mb-1 mr-1" />{item?.rating}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSection;