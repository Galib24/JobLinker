import React from 'react';
import jobBanner from "@/asserts/jobsbanner.jpg";
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const JobsBanner = () => {
 return (   
       <div className='grid lg:grid-cols-2 mt-14 gap-10 m:4 lg:ml-10 justify-center'>
       <Image src={jobBanner} alt=''></Image>
           <div className=' lg:w-3/4'>
               <h2 className=' text-3xl font-bold mb-4'>Making new Jobs opportunites every day </h2>
               <p className='mb-5 text-slate-600'>Listen closely to your inner self. If your work delivers you joy, you’re on the right path. If not, experiment with other activities until you find the one that ignites a passion within you.</p>
               
               <p className='mb-2'><FaCheck className='mr-2'></FaCheck> Bring to the table win-win survival</p>
               <p className='mb-2'><FaCheck className='mr-2'></FaCheck> Capitaliza on low hanging fruit to identify</p>
               <p className='mb-2'><FaCheck className='mr-2'></FaCheck> But I must explain to you how all this</p>
               <button className='btn  bg-[#40e1f9]  p-3 rounded-lg text-white hover:bg-black hover:text-[#F68519] ease-out duration-300 mt-3'><Link href={`/login`}>Get Started</Link></button>
   
           </div>
       </div>  
    );
};

export default JobsBanner;