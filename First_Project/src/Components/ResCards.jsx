

import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant';

const ResCards = () => {
    
    const [resData,setResData] = useState([]);
    const [inputData,setInputData] = useState("");


    const btnClick = ()=>{
       const filteredData = resData.filter((value) => value.description.toLocaleLowerCase().includes(inputData));
        setResData(filteredData);
    }
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
       const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const data = await res.json();
       setResData(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }
    console.log(resData);

  return (
    <div>
        <div className="p-4">
            <input type="text" className="border border-black rounded-lg px-4 py-2" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
            <button className="px-10 py-2 border border-black rounded-lg mx-2" onClick={btnClick}>Search</button>
            <button className="px-10 py-2 border border-black rounded-lg mx-2">Filter by Rating</button>
        <div className="w-full min-h-[100%] flex items-center justify-between flex-wrap gap-6 p-10">
        { resData && resData.map((cards, i) => (
            <div className="card w-[250px] border border-black rounded-lg bg-red-400 p-2" key={i}>
            <div>
              <img src={BASE_URL + cards.imageId} alt="" className="rounded-lg" />
            </div>
            <div>
              <p> NAME: {cards.description}</p>
              <p> PRICE: {Math.floor(cards.id / 10000)*2}</p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ResCards;