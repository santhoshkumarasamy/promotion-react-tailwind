import { BsGraphUp } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";
import AchievementsCard from "./UI/AchievementsCard";
import image from '../assets/blurredImage.png'
const Achievements = () => {
  const data = [
    {
      image: <BsGraphUp />,
      title: "97%",
      content: "Coverage",
    },
    {
      image: <FaUserGraduate />,
      title: "286",
      content: "Lesson development",
    },
    {
      image: <SlSocialYoutube />,
      title: "369",
      content: "Video lesson",
    },
    {
      image: <HiOutlineDocumentText />,
      title: "365",
      content: "Methodical guide",
    },
  ];
  return (
    <section className=" relative ">
   
      <div className="max-w-[1240px] mx-auto  overflow-hidden relative ">
         <img src={image} alt="blurred background   " className="absolute left-0 right-0 md:-top-[50%] blur -z-10 object-fill" />
        <div className="flex items-center px-16 h-fit z-10 py-24  bg-black/20 gap-4 flex-shrink">
            {
            data.map((data,index)=>{
                return <AchievementsCard key={index} props={data} />
            })
        }
        </div>
        
        </div>
    </section>
  );
};

export default Achievements;
