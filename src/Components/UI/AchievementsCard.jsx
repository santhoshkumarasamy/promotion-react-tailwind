

const AchievementsCard = ({props}) => {
  return (
    <div className="flex flex-row gap-4 text-white items-center w-full">
        <div className="w-fit h-full text-5xl">
            {props.image}
        </div>
        <div className="flex flex-col w-full">
            <h4 className="font-bold text-xl">{props.title}</h4>
            <p className="text-lg font-extralight">{props.content}</p>
        </div>
    </div>
  )
}

export default AchievementsCard
