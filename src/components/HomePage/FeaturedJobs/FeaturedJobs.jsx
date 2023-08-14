import dataOfFeaturedJobs from "@/data/featuredJobs";

const FeaturedJobs = () => {
    console.log(dataOfFeaturedJobs);
    return (
        <div>
            FeaturedJobs: {dataOfFeaturedJobs.length}
        </div>
    );
};

export default FeaturedJobs;