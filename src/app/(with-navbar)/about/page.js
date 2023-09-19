import Image from 'next/image';
// import yeahia from '../../../asserts/about/yeahia.jpg'
import rahat from '../../../asserts/about/rahat.jpg'
import shakil from '../../../asserts/about/shakil.jpg'
import likhon from '../../../asserts/about/likhon.jpg'
import sani from '../../../asserts/about/sani.jpg'
import BannerComponent from '@/components/Shared/BannerComponent/BannerComponent';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const AboutPage = () => {
    return (
        <div className="container mx-auto">
            {/* header div */}
            <div className="bg-indigo-50">
                <BannerComponent headingTitle="About" pageName="about" />
            </div>
            <div className="grid md:grid-cols-3 gap-5 my-10 mx-auto lg:ml-10">

                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src='https://i.ibb.co/fN2CS0r/Capture.png' width={100} height={100} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Abu Yeahia</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Backend Developer</h4>
                        <p className='mt-3 text-gray-600'>The backend of a software application or system is the part that operates behind the scenes, handling data management, business logic, and communication with external services. It plays a crucial role in ensuring that an application runs smoothly and securely.</p>
                    </div>

                    <div className='flex mt-5 gap-5'>
                        <p className='sm:mb-4'><BsFacebook className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsFacebook></p>
                        <p><BsLinkedin className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300 sm:mb-4"></BsLinkedin></p>
                        <p><BsInstagram className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300 sm:mb-4"></BsInstagram></p>
                    </div>
                </div>


                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={rahat} width={100} height={100} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto '>
                        <h1 className=' text-center font-bold text-lg'>Abdur Rahman</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Backend Developer</h4>
                        <p className='mt-3 text-gray-600'>The backend of a software application or system is the part that operates behind the scenes, handling data management, business logic, and communication with external services. It plays a crucial role in ensuring that an application runs smoothly and securely.</p>
                    </div>
                    <div className='flex mt-5 gap-5'>
                        <p><BsFacebook className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsFacebook></p>
                        <p><BsLinkedin className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsLinkedin></p>
                        <p><BsInstagram className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsInstagram></p>
                    </div>
                </div>



                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={likhon} width={100} height={100} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Asaduzzaman Likhon</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>The frontend, also known as the client-side, is the user-facing part of a software application or website. It encompasses the design, layout, and interactive elements that users see and interact with on their screens. The primary purpose of the frontend is to provide a user-friendly and visually appealing experience while enabling users to access and interact with the applications features and content.</p>
                    </div>

                    <div className='flex mt-5 gap-5'>
                        <p><BsFacebook className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsFacebook></p>
                        <p><BsLinkedin className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsLinkedin></p>
                        <p><BsInstagram className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsInstagram></p>
                    </div>
                </div>

                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={shakil} width={100} height={100} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Shakil Hossain</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>The frontend, also known as the client-side, is the user-facing part of a software application or website. It encompasses the design, layout, and interactive elements that users see and interact with on their screens. The primary purpose of the frontend is to provide a user-friendly and visually appealing experience while enabling users to access and interact with the applications features and content.</p>
                    </div>

                    <div className='flex mt-5 gap-5'>
                        <p><BsFacebook className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsFacebook></p>
                        <p><BsLinkedin className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsLinkedin></p>
                        <p><BsInstagram className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsInstagram></p>
                    </div>
                </div>

                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src='https://i.ibb.co/qWhgLNc/sani.jpg' width={100} height={100} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Jakariah Hossain Sani</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>Hi I am Jakariah Hossain Sani I am a fronted developer.  I can design eye catching on client side and it is user friendly.  Also can be responsive for all devices.  And can do basic backend site intelligence.
                        <br />
                        My skills are react, node.js, express.js, firebase, mongodb and next.js</p>
                    </div>

                    <div className='flex mt-5 gap-5'>
                        <p><BsFacebook className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsFacebook></p>
                        <p><BsLinkedin className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsLinkedin></p>
                        <p><BsInstagram className="text-[#40e1f9] text-2xl hover:text-[#ecd273]  hover:font-extrabold mr-1 cursor-pointer ease-out duration-300"></BsInstagram></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutPage;