import React from 'react';
import dataOfFeaturedJobs from '@/Data/featuredJobs';
import SingleFeaturedJobs from './SingleFeaturedJobs';


const FeaturedJobs = () => {
    // console.log(dataOfFeaturedJobs);
   const topFeaturedJobs  = dataOfFeaturedJobs.filter(i => i.rating >= 5)
//    console.log(topFeaturedJobs);
    return (
        <div className='mt-20'>
            <h2 className='text-2xl text-center font-semibold'>Featured Jobs</h2>
            <p className='text-base text-center my-2'>Know your worth and find the job that qualify your life</p>

            <div className='grid md:grid-cols-2'>
                {
                    topFeaturedJobs.map(item=><SingleFeaturedJobs
                    key={item._id}
                    item={item}
                    ></SingleFeaturedJobs>)
                }
            </div>
            {/* button */}
            <div className='flex justify-center my-14'>
                <button className="btn bg-[#1b81d4] hover:bg-[#1670ba] py-8 text-white">
                    <span className='text-center items-center font-semibold'>Load More Listing</span>
                </button>
            </div>
            {/* button */}
           
        </div>
    );
};

export default FeaturedJobs;