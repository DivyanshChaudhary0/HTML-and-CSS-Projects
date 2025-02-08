import { useEffect, useState } from "react";

const useRestraunt = (resId)=>{

    const [menuData,setMenuData] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const res =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`);
        const data = await res.json();
        setMenuData(data?.data);
    }

    return menuData;
}

export default useRestraunt;