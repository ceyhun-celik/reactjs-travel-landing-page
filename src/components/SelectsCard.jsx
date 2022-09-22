import React from 'react'

const SelectsCard = (props) => {
    return (
        <div className='relative'>
            <img src={props.bg} className='w-full h-full object-cover' alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-xl text-white font-bold absolute'>{props.text}</p>
            </div>
        </div>
  )
}

export default SelectsCard