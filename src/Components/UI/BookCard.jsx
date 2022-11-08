import { HiOutlineMapPin } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";
import {
  AiOutlineEye,
  AiOutlineCloudDownload,
  AiOutlineStar,
} from "react-icons/ai";

const BookCard = ({ props }) => {
  return (
    <div className=" group overflow-hidden rounded-lg border-2 border-slate-200 relative ">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-primary-blue">{props.title}</h2>
        <div className="flex gap-1 items-center text-base font-semibold">
          <HiOutlineMapPin className="text-xl" />
          <p>{props.location}</p>
        </div>
      </div>
      <img src={props.image} alt="book" className="w-[90%] mx-auto" />
      <div className=" group-hover:flex flex-col gap-2 hidden absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 text-white px-8 py-40  ">
        <div className="flex gap-3 items-center ">
          <BiUser />
          Xalida Turakulova
        </div>
        <div className="flex gap-3 items-center ">
          <HiOutlineMapPin />
          Jizzax viloyati, Jizzax Shahari
        </div>
        <div className="flex gap-3 items-center ">
          <SlGraduation />
          Xneeax wxt6 29 Marka6
        </div>
        <div className="flex gap-3 items-center ">
          <AiOutlineEye />
          5,320
        </div>
        <div className="flex gap-3 items-center ">
          <AiOutlineCloudDownload />
          200
        </div>
        <div className="flex gap-3 items-center ">
          <AiOutlineStar />
          5
        </div>
      </div>
    </div>
  );
};

export default BookCard;
