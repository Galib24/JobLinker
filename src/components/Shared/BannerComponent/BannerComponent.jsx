import Link from "next/link";

const BannerComponent = ({headingTitle, pageName}) => {
    return (
        <div className='bg-[#E4EBFA] h-[200px] flex flex-col justify-center items-center mt-32'>
            <h2 className="text-2xl font-semibold">{headingTitle}</h2>
            <p><Link href="/" className="cursor-pointer">Home</Link> / {pageName}</p>
        </div>
    );
};

export default BannerComponent;