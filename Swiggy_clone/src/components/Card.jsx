

import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  console.log(data);
  
  return (
    <Link to={`/restaurants/${data.info.id}`}>
      <div className="w-[260px] min-h-80 rounded-[20px] overflow-hidden shadow-lg cursor-pointer">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.info?.cloudinaryImageId}`} alt="" 
        className="w-full h-52 object-cover object-center hover:scale-105 transition-all" />
        <div className="p-4">
            <p className="title font-medium text-xl line-clamp-1 mb-2">{data.info.name}</p>
            <p className="rating flex items-center gap-1">
              <span className='w-6 h-6 flex items-center justify-center rounded-full bg-green-600'><AiOutlineStar size="12px" color='white' /></span>
              <span className='font-medium'>{data.info.avgRating}</span>
              <span className='font-medium ml-2'>{data?.info?.sla?.slaString}</span>
            </p>
            <p className="cuisines line-clamp-1">{data.info.cuisines.join(", ")}</p>
            <p className="locality">{data.info.locality}</p>
        </div>
    </div>
  </Link>
  )
}

export default Card;