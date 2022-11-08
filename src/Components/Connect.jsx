import image from '../assets/hero.png'
import {BsCheck2} from "react-icons/bs"
const Connect = () => {
  return (
    <section>
      <div className='max-w-[1240px] grid mx-auto grid-cols-1 md:grid-cols-5 py-8'>
        <div className=' aspect-square items-center flex justify-center col-span-2 relative '>
            <img src={image} alt="hero" className='w-[80%]' />
            <div className='absolute h-[55%] min-h-fit w-[35%] p-7 -bottom-5 right-20 bg-white shadow-2xl '>
                <div className='w-full h-[60%] flex justify-between items-end ' >
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    
                    <div className=' bg-primary-blue h-[60%] p-1'></div>
                    <div className=' bg-primary-blue h-[50%] p-1'></div>
                    <div className=' bg-primary-dark-blue h-[90%] p-1'></div>
                    <div className=' bg-primary-blue h-[80%] p-1'></div>
                    <div className=' bg-primary-blue h-[40%] p-1'></div>
                    <div className=' bg-primary-blue h-[70%] p-1'></div>
                    
                </div>
                <div className='w-full h-[20%] flex  justify-between'>
                    
                    <div className=' bg-primary-blue h-[100%] p-1'></div>
                    <div className=' bg-primary-blue h-[80%] p-1'></div>
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    <div className='p-1'></div>
                    
                </div>
                <div className='w-full h-fit pt-3 overflow-clip'>
                    <h3 className='font-bold text-primary-dark-blue'>30%</h3>
                    <p className='text-xs h-fit break-words  whitespace-nowrap'>More income in June</p>
                </div>
            </div>
        </div>
        <div className='py-8 col-span-3 items-center h-fit my-auto px-4 md:px-0'>
            <h2 className='text-4xl font-light '>We connect our customers with the best, and help them keep up-and stay open.</h2>
            <ul className='py-8'>
                <li className=' px-0 py-3 flex gap-6 items-center'><span className=" bg-primary-dark-blue rounded-full p-2 text-white "><BsCheck2  /></span><p>We connect our customers with the best.</p></li>
                <li className=' px-0 py-3 flex gap-6 items-center'><span className=" bg-primary-dark-blue rounded-full p-2 text-white "><BsCheck2  /></span><p>Advisor success customer launch party.</p></li>
                <li className=' px-0 py-3 flex gap-6 items-center'><span className=" bg-primary-dark-blue rounded-full p-2 text-white "><BsCheck2  /></span><p>Business-to-consumer long tail.</p></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Connect
