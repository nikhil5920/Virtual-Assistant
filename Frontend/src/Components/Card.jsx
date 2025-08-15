import React from 'react'
import PropTypes from 'prop-types';

const Card = ({image}) => {
  return (
    <div className='w-[80px] h-[160px] lg:w-[150px] lg:h-[250px] bg-blue-500 border-2 border-[blue] rounded-2xl overflow-hidden 
    hover:shadow-2xl hover:shadow-amber-50 cursor-pointer hovar:border-4px border-white'>
        <img src={image} className='h-full object-cover' alt="" />
    </div>
  )
}

Card.PropTypes={
  image:PropTypes.string.isRequired
}

export default Card
