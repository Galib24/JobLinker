import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaEnvelopeOpenText, FaRegNewspaper, FaUsersViewfinder } from 'react-icons/fa6';
import InsinghtsChart from '../Chart/InsinghtsChart/InsinghtsChart';
import RevenueChat from '../Chart/RevenueChat/RevenueChat';
import CusSatisfaction from '../Chart/CusSatisfaction/CusSatisfaction';
import TargetVSReality from '../Chart/TargetVSReality/TargetVSReality';

const DashBoardHome = () => {

    return (
        <div >
            <h2 className=' font-bold text-xl text-center'>DashBoard Home</h2>
            <div className='lg:flex gap-10 items-center justify-between p-5'>    
                {/* input filed  */}
                <div>
                <div className="flex items-end justify-end w-full bg-blue-50 rounded-lg px-4 py-2 shadow">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 border rounded-md px-3 lg:pr-96 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button className="ml-2 px-4 py-2 font-bold rounded-md focus:outline-none bg-blue-400 text-white">
                    <BiSearch className="text-2xl" />
                  </button>
                </div>
              </div>
              {/* search bar end */}
              {/* admin profile by btn start */}
              <div className="flex items-center justify-center">
                <div className="w-fit font-medium my-4 lg:my-0">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={50} src="" alt=''/>
                    </div>
                    </div>
                </div>
              </div>
            </div>

            {/* today summery  */}

            <div className='flex  justify-evenly'>
                
                 
                
            </div>

            <div className='mt-5'>
            <h2 className=' font-bold'>Today Jobs summery</h2>
                <div className='md:flex'>

                {/* Jobs summery start     */}
                <div className='md:flex gap-5 rounded-lg mt-5'>
                    
                   <div className='rounded-lg border border-gray-200 p-2'>
                       <FaRegNewspaper className=' text-2xl'></FaRegNewspaper>
                       <h2 className='font-bold mt-2'>40</h2>
                       <p className=' text-sm font-bold'>Total Jobs Post</p>
                       <p className=' text-sm text-slate-500'>8% from Yesterday</p>
                   </div>
                   <div className='rounded-lg border border-gray-200 p-2'>
                       <FaUsersViewfinder className=' text-2xl mb-2'></FaUsersViewfinder>
                       <h2 className='font-bold'>5</h2>
                       <p className='text-sm font-bold'>Total Interview</p>
                       <p className='text-sm text-slate-500'>5% from Yesterday</p>
                   </div>
                   
                   <div className='rounded-lg border border-gray-200 p-2'>
                       <FaEnvelopeOpenText className=' text-2xl mb-2'></FaEnvelopeOpenText>
                       <h2 className='font-bold'>100</h2>
                       <p className='text-sm font-bold'>Total Apply</p>
                       <p className='text-sm text-slate-500'>5% from Yesterday</p>
                   </div>
               </div>
                {/* Jobs summery end*/}
                
               {/* Visitor Insinghts start  */}
               <div>
               <h2 className=' font-bold'>Visitor Insinghts</h2>
                 <InsinghtsChart></InsinghtsChart>
               </div>
               {/* Visitor Insinghts end  */}
                </div>
                </div>


                <div className='grid md:grid-cols-3 gap-5 mt-5'>
                    <div>
                        <RevenueChat></RevenueChat>
                    </div>
                    <div>
                        <CusSatisfaction></CusSatisfaction>
                    </div>
                    <div>
                        <TargetVSReality></TargetVSReality>
                    </div>
                </div>
            </div>
        
    );
};

export default DashBoardHome;