import {BsArrowUp} from 'react-icons/bs'

const MoveUp = () => {
    const scroll =()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  return (
    <div className='fixed rounded-full p-4 z-10 right-10 bottom-11 bg-yellow-green text-white text-2xl cursor-pointer' onClick={scroll}>
      <BsArrowUp />
    </div>
  )
}

export default MoveUp
