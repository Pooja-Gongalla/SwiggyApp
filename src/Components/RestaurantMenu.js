import { useEffect } from "react";
import shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useState } from "react";
const RestaurantMenu=()=>
{
    const [resInfo,setresInfo]=useState();

     useEffect(()=>{
          fetchMenu();
     },[]);
     const fetchMenu=async()=>{
        // const data=await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9411723&lng=77.6213047&restaurantId=201224&submitAction=ENTER');
        const data=await fetch('https://www.swiggy.com/city/bangalore/meghana-foods-koramangala-rest229s://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9411723&lng=77.6213047&restaurantId=201224&submitAction=ENTER');
        const json= await data.json();
     console.log(json);
     setresInfo(json.data);
    }
   return resInfo===null ? (<shimmer/>) :(
    <div className="menu">
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <h2>Menu</h2>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>

    </div>
   )
}
export default RestaurantMenu;