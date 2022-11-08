import image from '../assets/groupphoto.png'

const About = () => {
  return (
    <section className='w-full'>
      <div className='group max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2  bg-primary-dark-blue text-white '>
        <div className='px-8 py-12 '>
            <h1 className='text-3xl font-bold font-source'>About Us</h1>
            <ol className='  list-disc pl-8 text-sm pt-4'>
                <li className='p-2'>Effective organization of the educational process in the general secondary education system and advanced work practices aimed at improving the quality of education in the educational process, introduction of modern pedagogical technologies and interaction between the employees of the public education system exchange of experience will be launched.</li>
                <li className='p-2'>Dissemination of advanced work practices is recommended by the applicant for effective organization of the educational process, introduction of modern pedagogical technologies, and advanced work methods aimed at improving the quality of education.</li>
                <li className='p-2'>Studying and popularizing the best work experiences of applicants is carried out through the platform www.ommazharishtiya.uz.
                </li>
            </ol>
        </div>
        <div className='w-ful h-full  overflow-hidden relative '>
            <img src={image} alt="" className='z-0 group-hover:rotate-12 group-hover:scale-125 duration-700 ease-in-out ' />
            <div className='absolute z-10 group-hover:bg-black/20 w-full h-full top-0 left-0 duration-700 ease-in-out'></div>
        </div>
      </div>
    </section>
  )
}

export default About
