import React from 'react'

const ProductsCard = ({props}) => {
  return (
    <div className=' rounded-b-xl overflow-hidden h-fit hover:shadow-lg hover:border-b-2 hover:border-secondary-blue'>
      <img src={props.image} alt={props.title} className="object-fill w-full " />
      <div className='p-4 '>
        <h4 className='text-lg font-bold py-2'>{props.title}</h4>
        <p className='text-sm'>{props.content}</p>
      </div>
    </div>
  )
}

export default ProductsCard
