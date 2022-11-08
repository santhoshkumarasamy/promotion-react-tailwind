import logo from '../assets/logowhite.png'

const Footer = () => {
  return (
    <footer className="w-full text-white text-sm">
      <div className="max-w-[1240px] mx-auto px-12 bg-primary-dark-blue py-20 h-full grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 ">

        <div className='flex gap-3 items-center h-fit'>
          <img src={logo} alt="logo white"  className='w-[50px]'/>
          <h5>Lorem Ipsum dlor sit amet</h5>
        </div>
        <div>
          <h5 className='pb-5'>100022, Toshkent shahar, Yakkasaroy<br /> tumani, Qahramon ko'chasi, 125-uy</h5>
          <p className='py-1'><span className='underline-offset-4 decoration-yellow-green underline'>Loremipsum@</span>xtv.vz</p>
          <p className='py-1 underline-offset-4 decoration-yellow-green underline'>+998 (71)-123-45-67</p>
        </div>
        <div className='grid grid-cols-2'>
          <ul>
            <li className='p-2'>Asosly</li>
            <li className='p-2'>Biz haqimizda</li>
            <li className='p-2'>Normativ hujjatlar</li>
            <li className='p-2'>Ommalashtirish tartibi</li>
            <li className='p-2'>Metodik mahsulotlar</li>
            <li className='p-2'>Namunaviy ishlar</li>
            <li className='p-2'>Ommalashtirish ishlari</li>
          </ul>
          <ul>
            <li className='p-2'>Facebook</li>
            <li className='p-2'>Telegram</li>
            <li className='p-2'>YouTube</li>
            <li className='p-2'>Instagram</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
