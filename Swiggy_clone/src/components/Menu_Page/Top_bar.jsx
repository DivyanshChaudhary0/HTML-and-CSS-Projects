
import React from 'react'

const Top_bar = ({info}) => {
    console.log(info);
    
  return (
    <div>
        <p className='text-3xl font-bold'>{info.name}</p>
        <div className='mt-6 border border-black rounded-[20px] px-4 py-6'>
            <p className='font-medium'>
                <span>{info.avgRatingString}</span>
                <span className='ml-1'>({info.totalRatingsString})</span>
                <span className='ml-2'>{info.costForTwoMessage}</span>
            </p>
            <p className='font-medium text-orange-500'>
                {info.cuisines.join(", ")}
            </p>
            <p className='flex flex-col gap-3 font-medium'>
                <span className='text-[14px] opacity-70'>Outlet: {info.locality}</span>
                <span className='text-[14px] opacity-70'>{info.sla.slaString}</span>
            </p>
        </div>
    </div>
  )
}

export default Top_bar;