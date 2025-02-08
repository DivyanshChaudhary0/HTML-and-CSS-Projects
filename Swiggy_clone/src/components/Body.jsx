
import { useEffect, useState } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    const [resData,setResData] = useState([]);
    const [allData,setAllData] = useState([]);
    const [input,setInput] = useState("");
    const isOnline = useOnlineStatus();

    useEffect(()=>{
      getData();
    },[])
  
    const getData = async ()=>{
      const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await res.json();
      setResData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const filterbyname = ()=>{
      const filteredData = allData.filter((value)=>value.info.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
      setResData(filteredData);
    }

    const filterbyrating = ()=>{
      const filteredData = allData.filter((value)=>value.info.avgRating > 4);
      setResData(filteredData);
    }

    const showAllCards = ()=>{
      setResData(allData);
    }

    if(isOnline === false){
      return <h1 className='w-full h-1/2 p-10 text-center text-3xl'>Make sure you are connected to internet...</h1>
    }

  return (
    <div className="w-[80%] mx-auto py-10">

      <div className='input-container mb-6 flex items-center gap-4'>
        <input type="text"
        value={input}
        placeholder='Filter by name' 
        className=' px-4 py-2 w-52 border border-black rounded-lg outline-orange-300'
        onChange={(e)=>setInput(e.target.value)}
        />

        <button 
        className=' px-8 py-2 border border-black rounded-[20px] hover:border-orange-400'
        onClick={filterbyname}
        >Search
        </button>

        <button
        className=' px-8 py-2 border border-black rounded-[20px] hover:border-orange-400'
        onClick={filterbyrating}
        >Filter by rating (4)
        </button>

        <button
        className=' px-8 py-2 border border-black rounded-[20px] hover:border-orange-400'
        onClick={showAllCards}
        >All Restaurants
        </button>

      </div>

      <div className='flex items-center justify-between gap-4 flex-wrap'>
          {
            resData.length <= 0 ? <Shimmer/> :
              resData.map((value,index)=>(
                  <Card data={value} key={index} />
              ))
          }
      </div>

    </div>
  )
}

export default Body;