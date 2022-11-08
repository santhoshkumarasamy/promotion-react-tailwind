import image from "../assets/connect.png";
import { TbLeaf } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
const Customer = () => {
  return (
    <section>
      <div className="max-w-[1240px] grid mx-auto grid-cols-1 md:grid-cols-5 h-fit">
        <div className=" aspect-square  flex justify-center col-span-2 relative order-2">
          <img src={image} alt="hero" className="w-[80%] object-cover h-fit" />
          <div className="absolute h-[60%] w-[45%]  -bottom-4 left-28 bg-white shadow-2xl ">
            <div className="p-7">
              <div className=" w-[100%] flex aspect-square border-[1.5rem] rounded-full border-r-secondary-green border-t-primary-dark-blue border-b-primary-blue border-l-secondary-blue justify-between mx-auto rotate-12"></div>
            </div>

            <div className="w-full px-4 ">
              <ul>
                <li className="p-0 text-sm flex-nowrap overflow-hidden whitespace-nowrap flex  items-center gap-1">
                  <div className="p-1 bg-primary-blue rounded-full overflow-hidden border w-fit h-fit"></div>{" "}
                  50% - Agile Development
                </li>
                <li className="p-0 text-sm flex-nowrap overflow-hidden whitespace-nowrap flex  items-center gap-1">
                  <div className="p-1 bg-primary-dark-blue rounded-full overflow-hidden border w-fit h-fit"></div>{" "}
                  25% - Investor bandwidth
                </li>
                <li className="p-0 text-sm flex-nowrap overflow-hidden whitespace-nowrap flex  items-center gap-1">
                  <div className="p-1 bg-secondary-green rounded-full overflow-hidden border w-fit h-fit"></div>{" "}
                  25% - A/B Testing
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-16 col-span-3 items-center h-fit my-auto px-8 ">
          <h2 className="text-4xl font-light md:w-[90%]  mb-3">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="py-8 flex flex-col gap-4 md:w-[80%]">
            <li className=" px-4 py-3 flex gap-6 items-center shadow-lg border-primary-dark-blue rounded-sm hover:text-white hover:bg-primary-dark-blue">
              <span className=" p-2  text-xl ">
                <TbLeaf />
              </span>
              <p>We connect our customers with the best.</p>
            </li>
            <li className=" px-4 py-3 flex gap-6 items-center shadow-lg border-primary-dark-blue rounded-sm hover:text-white hover:bg-primary-dark-blue">
              <span className=" p-2  text-xl ">
                <AiOutlineEye />
              </span>
              <p>Advisor success customer launch party.</p>
            </li>
            <li className=" px-4 py-3 flex gap-6 items-center shadow-lg border-primary-dark-blue rounded-sm hover:text-white hover:bg-primary-dark-blue">
              <span className=" p-2  text-xl ">
                <BiSun />
              </span>
              <p>Business-to-consumer long tail.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Customer;
