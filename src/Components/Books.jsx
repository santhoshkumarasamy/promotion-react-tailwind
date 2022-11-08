import image from "../assets/book.png";
import BookCard from "./UI/BookCard";
const Books = () => {
  const data = [
    {
      image: image,
      title: "Khalida Turakulova",
      location: "Jizzakh region Jizzakh shxtb 29 School.",
    },
    {
      image: image,
      title: "Khalida Turakulova",
      location: "Jizzakh region Jizzakh shxtb 29 School.",
    },
    {
      image: image,
      title: "Khalida Turakulova",
      location: "Jizzakh region Jizzakh shxtb 29 School.",
    },
  ];
  return (
    <section className="w-full">
      <div className="max-w-[1240px] mx-auto px-12 py-12">
        <h3 className="text-center w-full font-bold text-3xl tracking-widest pb-8 ">
          Sample works
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data.map((data, index) => {
            return <BookCard props={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
