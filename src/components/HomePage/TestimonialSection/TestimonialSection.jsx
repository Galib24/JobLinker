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
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import Image from "next/image";

const TestimonialSection = () => {
    // console.log(dataArray);
    return (
        <div
            className="px-10 bg-slate-50 pb-32 pt-8 mt-10">
            <div
                className="mb-10">
                <h2
                    className="text-3xl font-bold mt-20 mb-3 text-center">
                    Testimonials From Our Customers
                </h2>
                <p
                    className="text-center font-medium">
                    Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                </p>
            </div>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-6xl bg-white shadow-sm rounded-xl">
                {/* TestimonialSection map review section */}
                {
                    dataArray.map(item => <SwiperSlide
                        className="px-10 py-14"
                        key={item.name}>
                        <div
                            className="flex justify-end pr-20">
                            <BsFillChatRightQuoteFill className="text-6xl text-gray-400" />
                        </div>
                        <p
                            className="text-center font-bold text-xl">
                            {item?.review}
                        </p>
                        <div
                            className="flex gap-5 mt-10">
                            <div>
                                <Image
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                    src={item?.img}
                                    alt="Picture of who give the review">
                                </Image>
                            </div>
                            <div>
                                <h2
                                    className="text-2xl font-semibold">
                                    {item?.name}
                                </h2>
                                <p
                                    className="text-sm font-medium">
                                    {item?.jobRole}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TestimonialSection;