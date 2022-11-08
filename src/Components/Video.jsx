
import { BsPlay } from "react-icons/bs";
import {FiWatch,FiSlack} from 'react-icons/fi'
const Video = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1240px] bg-primary-dark-blue/10 py-16 px-12">
        <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-video h-[20rem] md:h-full w-full  items-center flex bg-cover">
            <div className="top-auto h-fit w-fit rounded-full border-8 border-yellow-green/30  text-white mx-auto my-auto overflow-hidden text-2xl  ">
              <BsPlay className=" rounded-full w-full h-full bg-yellow-green p-2" />
            </div>
          </div>
          <div className="py-20 flex justify-between flex-col px-4 gap-16">
            <div className="flex gap-4 items-center">
                <div className="text-3xl p-4 flex items-center h-fit aspect-square text-center shadow-lg rounded text-yellow-green">
                    <FiWatch className="mx-auto" />
                </div>
                <div className="flex flex-col justify-between h-fit">
                    <h4 className="py-1 text-2xl ">Lorem Ipsum</h4>
                    <p className="text-sm">The pleasures of the spoiled and corrupted do not foresee the pains and troubles they are about to experience, blinded by lust</p>
                </div>
            </div>
                        <div className="flex gap-4 items-center">
                <div className="text-3xl p-4 flex items-center h-fit aspect-square text-center shadow-lg rounded text-yellow-green">
                    <FiSlack className="mx-auto" />
                </div>
                <div className="flex flex-col justify-between h-fit">
                    <h4 className="py-1 text-2xl ">No one</h4>
                    <p className="text-sm">But in truth we both accuse those who are worthy of just hatred, who are softened by the flattery of present pleasures.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
