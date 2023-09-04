import Marquee from "react-fast-marquee";
import Img1 from "../../../asserts/sponsership/cocacola.png"
import Img2 from "../../../asserts/sponsership/amazon.png"
import Img3 from "../../../asserts/sponsership/skype.png"
import Img4 from "../../../asserts/sponsership/pepsi.png"
import Img5 from "../../../asserts/sponsership/yahoo.png"
import Img6 from "../../../asserts/sponsership/Johnson-and-Johnson-logo.png"

import Image from "next/image";

const SponsorShip = () => {
  return (
    <div
      className="container mx-auto">
      <h1 className="text-4xl font-semibold text-center my-16">Sponsored By</h1>
      <div className="px-8 mt-10">
        <Marquee Gradient width={200}>
          <Image className="mr-10" src={Img1} alt=""></Image>
          <Image className="mr-10" src={Img2} alt=""></Image>
          <Image className="mr-10" src={Img3} alt=""></Image>
          <Image className="mr-10" src={Img4} alt=""></Image>
          <Image className="mr-10" src={Img5} alt=""></Image>
          <Image src={Img6} alt=""></Image>
        </Marquee>
      </div>
    </div>
  );
};

export default SponsorShip;