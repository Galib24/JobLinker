import Image from 'next/image';
import React from 'react';
import { FaEnvelopeOpenText, FaRegNewspaper, FaUsersViewfinder } from 'react-icons/fa6';
import InsinghtsChart from '../Chart/InsinghtsChart/InsinghtsChart';
import RevenueChat from '../Chart/RevenueChat/RevenueChat';
import CusSatisfaction from '../Chart/CusSatisfaction/CusSatisfaction';
import TargetVSReality from '../Chart/TargetVSReality/TargetVSReality';

const DashBoardHome = () => {

    return (
        <div>
            <div
                className='lg:flex gap-10 items-center justify-between py-5'>
                {/* admin profile by btn start */}
                <div className="flex items-center justify-center">
                    <div className="w-fit font-medium my-4 lg:my-0">
                        <div className="avatar">
                            <div
                                className="rounded-full ring ring-primary ring-offset-base-900 ring-offset-2">
                                <Image
                                    width={60}
                                    height={60}
                                    src="https://img.freepik.com/free-vector/young-woman-white_25030-39546.jpg?w=740&t=st=1694415673~exp=1694416273~hmac=bd556e76e77d75ba803b9aa1fb74c9951c46a03cdd72314044fe2499245267b5"
                                    alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* today summery  */}

            <div className='flex  justify-evenly'>

            </div>

            <div className='mt-5'>
                <h2 className='font-bold'>
                    Today Jobs summery
                </h2>
                <div className='md:flex'>

                    {/* Jobs summery start     */}
                    <div
                        className='md:flex gap-5 rounded-lg mt-5'>

                        <div
                            className='rounded-lg border border-gray-200 p-2'>
                            <FaRegNewspaper className=' text-2xl' />
                            <h2
                                className='font-bold mt-2'>
                                40
                            </h2>
                            <p
                                className='text-sm font-bold'>
                                Total Jobs Post
                            </p>
                            <p
                                className='text-sm text-slate-500'>
                                8% from Yesterday
                            </p>
                        </div>
                        <div
                            className='rounded-lg border border-gray-200 p-2'>
                            <FaUsersViewfinder className=' text-2xl mb-2' />
                            <h2
                                className='font-bold'>
                                5
                            </h2>
                            <p
                                className='text-sm font-bold'>
                                Total Interview
                            </p>
                            <p
                                className='text-sm text-slate-500'>
                                5% from Yesterday
                            </p>
                        </div>

                        <div
                            className='rounded-lg border border-gray-200 p-2'>
                            <FaEnvelopeOpenText className=' text-2xl mb-2' />
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