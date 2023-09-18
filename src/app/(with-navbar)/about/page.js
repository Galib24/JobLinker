import Image from 'next/image';
// import yeahia from '../../../asserts/about/yeahia.jpg'
import rahat from '../../../asserts/about/rahat.jpg'
import shakil from '../../../asserts/about/shakil.jpg'
import likhon from '../../../asserts/about/likhon.jpg'
import sani from '../../../asserts/about/sani.jpg'

const AboutPage = () => {
    return (
        <div className="container mx-auto pt-16">
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
                </div>


                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={rahat} width={0} height={0} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto '>
                        <h1 className=' text-center font-bold text-lg'>Abdur Rahman</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Backend Developer</h4>
                        <p className='mt-3 text-gray-600'>The backend of a software application or system is the part that operates behind the scenes, handling data management, business logic, and communication with external services. It plays a crucial role in ensuring that an application runs smoothly and securely.</p>
                    </div>
                </div>



                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={likhon} width={0} height={0} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Asaduzzaman Likhon</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>The frontend, also known as the client-side, is the user-facing part of a software application or website. It encompasses the design, layout, and interactive elements that users see and interact with on their screens. The primary purpose of the frontend is to provide a user-friendly and visually appealing experience while enabling users to access and interact with the applications features and content.</p>
                    </div>
                </div>

                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={shakil} width={0} height={0} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Shakil Hossain</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>The frontend, also known as the client-side, is the user-facing part of a software application or website. It encompasses the design, layout, and interactive elements that users see and interact with on their screens. The primary purpose of the frontend is to provide a user-friendly and visually appealing experience while enabling users to access and interact with the applications features and content.</p>
                    </div>
                </div>

                <div className="about">
                    <div className="about-img"> 
                        <Image className='profile-pic rounded-full' src={sani} width={0} height={0} style={{ width: '100%', height: '100%'}} alt=''></Image>
                    </div>

                    <div className='about-info mx-auto'>
                        <h1 className=' text-center font-bold text-lg mt-3'>Arafat Sani</h1>
                        <h4 className=' text-center font-semibold text-base text-slate-500'>Frontend Developer</h4>
                        <p className='mt-3 text-gray-600'>The frontend, also known as the client-side, is the user-facing part of a software application or website. It encompasses the design, layout, and interactive elements that users see and interact with on their screens. The primary purpose of the frontend is to provide a user-friendly and visually appealing experience while enabling users to access and interact with the applications features and content.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutPage;