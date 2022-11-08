
import image1 from "../assets/content1.png";
import image2 from "../assets/content2.png";
import image3 from "../assets/content3.png";
import ProductsCard from "./UI/ProductsCard";

const MethoProducts = () => {
    const images= [image1,image2,image3];
    const contents= ["It is the development of a high-level one-hour sample class or group training, based on international experiences, conducted with advanced interactive methods.","A video of a length of up to 7 minutes and a volume of no more than 300 mb, explaining a lesson presentation or a personal innovative methodical experience that illuminates interactive methods in class or extracurricular activities. It doesn't matter what device the video was taken on.","Educational methodical manuals; letter of recommendation; brochures are sent in pdf format."];
    const titles =["Lesson development", "Video lesson","Methodical guide"];
    const data = images.map((item,index)=> {
        return ({
            image:item,
            title:titles[index],
            content:contents[index]
        })
    })
  return (
    <section className="w-full">
      <div className="px-8  max-w-[1240px] mx-auto md:pb-20 pb-12">
        <h1 className="w-full py-12 text-center text-4xl font-bold">Methodical products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                data.map((item,index)=>{
                    return <ProductsCard key={index} props={item} />
                })
            }
        </div>
      </div>
    </section>
  );
};

export default MethoProducts;
