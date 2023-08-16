import dataArray from "@/Data/testimonialData";

const TestimonialSection = () => {
    console.log(dataArray)
    return (
        <div>
            <h2>testimonial data{dataArray.length}</h2>
            {
                dataArray.map(item=><p key={item.name}>{item.name}</p>)
            }
        </div>
    );
};

export default TestimonialSection;