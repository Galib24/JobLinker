import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const WithNavbar = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default WithNavbar;