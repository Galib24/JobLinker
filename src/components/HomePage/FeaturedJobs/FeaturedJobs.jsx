import React from 'react';
import dataOfFeaturedJobs from '@/Data/featuredJobs';


const FeaturedJobs = () => {
    // console.log(dataOfFeaturedJobs);
   const topFeaturedJobs  = dataOfFeaturedJobs.filter(i => i.rating >= 5)
//    console.log(topFeaturedJobs);
    return (
        <div>
            <h2>feature job: {dataOfFeaturedJobs.length}</h2>
            <h2>{topFeaturedJobs.length}</h2>
            <h4>Added Title for practice purpose</h4>
        </div>
    );
};

export default FeaturedJobs;