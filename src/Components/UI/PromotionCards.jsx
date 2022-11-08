

const PromotionCards = ({props}) => {
  return (
    <div className="relative flex flex-col border-2 rounded-lg h-fit">
      <div className="absolute bg-yellow-green rounded-full aspect-square w-10 h-10 flex items-center text-center -right-5 -top-5 ">
        <p className=" w-full text-white ">{props.number}</p>
        </div>
      <img src={props.image} alt="" className=" h-[10rem]" />
      <p className="p-4 ">{props.content}</p>
    </div>
  )
}

export default PromotionCards
