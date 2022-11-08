import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'
import image4 from '../assets/service4.png'
import PromotionCards from './UI/PromotionCards'

const Promotion = () => {
    const data =[
        {
        image:image1,
        number:1,
        content:"Register in our system through ERP and post your work in the system to promote it."
    },
    {
        image:image2,
        number:2,
        content:"Allow 2 months for the published work to be evaluated by other teachers who teach your subject."
    },
    {
        image:image3,
        number:3,
        content:"100 works from each subject with the most and the highest evaluation are evaluated by experts and the system separates it in the descending order of popularity in the Republic, Province, and District."
    },
    {
        image:image4,
        number:4,
        content:"If your work is popular, download Certificates about the popularity of your work from your personal cabinet."
    }
]
  return (
    <section className='w-full'>
      <div className='mx-auto w-full max-w-[1240px] pb-16'>
        <h3 className='text-2xl font-bold  tracking-wider mx-auto w-fit py-16 '>Promotion procedure</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                data.map((data,index)=><PromotionCards key={index} props={data} />)
            }
        </div>
      </div>
    </section>
  )
}

export default Promotion
