import Link from "next/link";

const BannerComponent = ({ headingTitle, pageName }) => {
    return (
        <div
            className='h-[200px] flex flex-col justify-center items-center pt-32 pb-14'>
            <h2
                className="text-2xl font-semibold">
                {headingTitle}
            </h2>
            <p>
                <Link
                    href="/"
                    className="cursor-pointer hover:text-[#40e1f9]">
                    Home
                </Link> <span className="font-semibold">/</span> {pageName}
            </p>
        </div>
    );
};

export default BannerComponent;