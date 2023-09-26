'use client'
import contactFrom from '../../../asserts/contact-from.gif'
import Image from 'next/image';

const ContactFrom = () => {
    return (
        <div className='container mx-auto px-10 mb-20 mt-32'>
            <h1 className=' text-3xl  text-center font-bold'>Contact US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center my-5'>
                <div
                className='hidden lg:block'>
                    <Image
                        src={contactFrom}
                        alt=''
                        width={800}
                        height={200} />
                </div>
                <div>
                    <from>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold text-gray-600">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-2 text-base font-semibold text-gray-600">Your Email</span>
                            </label>
                            <input type="email" name="email" id="" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-2 text-base font-semibold text-gray-600">Your Massage</span>
                            </label>
                            <textarea cols="25" rows="8" placeholder="Your Massage" className="textarea textarea-bordered" ></textarea>
                        </div>

                        <input
                            className="mt-8 ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4 rounded-lg hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9]"
                            type="submit"
                            value="Submit" />
                    </from>

                </div>
            </div>
        </div>
    );
};

export default ContactFrom;
