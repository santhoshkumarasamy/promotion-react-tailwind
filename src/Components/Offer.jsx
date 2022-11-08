import { BsCheck2 } from "react-icons/bs";
import image from "../assets/offer.png";

const Offer = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1240px] py-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <h6 className=" text-xs pt-4">What We Offer</h6>
          <h1 className="pb-4 text-5xl font-bold leading-[1.3]  ">We love what we do & we do it with passion!</h1>
          <p>
            Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia acere aperiam
            sequi optio consectetur adipisicing dolor et amet.
          </p>
          <ul className="py-4 ">
            <li className="p-2 flex gap-2 items-center"><span className=" rounded-full p-2 text-yellow-green text-xl "><BsCheck2  /></span><p>They will drive you free as you just did</p></li>
            <li className="p-2 flex gap-2 items-center"><span className=" rounded-full p-2 text-yellow-green text-xl "><BsCheck2  /></span><p>The customer is the customer himself</p></li>
            <li className="p-2 flex gap-2 items-center"><span className=" rounded-full p-2 text-yellow-green text-xl "><BsCheck2  /></span><p>They will drive you free as you just did</p></li>
          </ul>
        </div>
        <div className=" h-full flex items-center justify-center ">
            <img src={image} alt="offer" className="h-[80%]"/>
        </div>
      </div>
    </section>
  );
};

export default Offer;
