// import Image from "next/image";
// import img1 from "@/asserts/job-category-img/1.PNG";
// import img2 from "@/asserts/job-category-img/2.PNG";
// import img3 from "@/asserts/job-category-img/3.PNG";
// import img4 from "@/asserts/job-category-img/4.PNG";
// import img5 from "@/asserts/job-category-img/5.PNG";
// import img6 from "@/asserts/job-category-img/6.PNG";
// import img7 from "@/asserts/job-category-img/7.PNG";
// import img8 from "@/asserts/job-category-img/8.PNG";
// import img9 from "@/asserts/job-category-img/9.PNG";

import dataOffCategory from "@/Data/jobCategory";

const JobCategories = () => {
  // const images = [
  //   { url: img1 },
  //   { url: img2 },
  //   { url: img3 },
  //   { url: img4 },
  //   { url: img5 },
  //   { url: img6 },
  //   { url: img7 },
  //   { url: img8 },
  //   { url: img9 },
  // ];
  return (
    <div>
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-3">Popular Job Categories</h2>
        <p>2020 jobs live - 293 added today</p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <Image
              src={image.url}
              alt="picture of JOb Category"
              width={390}
              height={100}
            ></Image>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ml-14">
        {
          dataOffCategory.map(data => <div 
          key={data.id}
          className="card w-96 bg-base-100 shadow-xl hover:bg-[#40e1f9] hover:text-[white] ease-out duration-300 cursor-pointer">
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.position}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          
          </div>
        </div>)
        }
      </div>

      <h2>feature job: {dataOffCategory.length}</h2>
    </div>
  );
};

export default JobCategories;
