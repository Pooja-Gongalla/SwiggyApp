import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react';
import { resList } from '../utils/mockData';
import shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery';
function Body() {
  //     const listOfRestaurants=[{
  //          data:{
  //             id:'334475',
  //             name:'KFC',
  //             cloudinaryImageId:'',
  //             cuisines:[];
  //             costForTwo:4000,
  //             deliveryTime:36,
  //             avgRating:'3.8',
  //          },
  //         },
  //    ];
  //    useEffect(()=>{
  //     console.log("useEffect Called");
  //    },[]) //first argument is arrow function is callback function and second argument is the dependency array
  /*
once below code render then call the above call back function 
ex: render below->call the function useEffect->then render what is there inside function 
  */
  console.log("Body rendered");   //first "Body rendered" output will render on console then "useEffect called" will be rendered on console.
  const [listofRes, setlistofRes] = useState(resList);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurantData, setfilteredRestaurant] = useState([]);
  // {
  //   id: "65797",
  //   name: "Leon's - Burgers & Wings (Leon Grill)",
  //   avgRating:3.8,
  //   // other properties
  // },
  // {
  //   id: "65799",
  //   name: "Red Bucket",
  //   avgRating:4.2
  //   // other properties
  // },
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  // useEffect(() => {
  //      fetchData();
  //  }, []);
  //  const fetchData = async () => {
  //   const data = await fetch(
  //   "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9411723&lng=77.6213047"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //  };

  //  //below one is conditional rendering
  // if(listofRes.length==0)
  // {
  //   console.log(<shimmer/>);
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)

    return (
      <h1>Looks you are offline. please check your internet connection</h1>
    );

  return listofRes.length === 0 ? (<shimmer />) : (
    <div className='filter-flex'>
      <div className="search m-4 p-4 flex items-center">
        <input type='text' className="border border-solid border-black p-4 py-2" value={searchText} onChange={(e) => setsearchText(e.target.value)} />
        
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
          const filteredRestaurant = listofRes.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
          setlistofRes(filteredRestaurant);
          //console.log(searchText);
        }}
        //filter the restarant cards and update the UI
        //search text

        >Search</button>
       
          <button className='px-4 py-2 bg-gray-100 m-4 rounded-lg' onClick={() => {
            //filter logic here
            const filterData = listofRes.filter((res) => res.avgRating > 4 //res: Represents each element (restaurant object) in the listOfRes array as the filter method iterates over the array.
            );
            setlistofRes(filterData);
            console.log(filterData);
          }}>
            Top Rated Restaurants</button>
        </div>
     
      

      <div className="flex flex-wrap">
        {/* /*like below i can create n number of cards 
                   for below instead of using cards we can optimise using map,fileter and reducer. it is best practice than using for lopp
                  <RestaurantCard resData={resList[0]} />  
                  <RestaurantCard resData={resList[1]} /> //instead of this below is optimized code
                */}

        {listofRes.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
        {/* <RestaurantCard resName='Meghana Foods' cuisine='Biryani, North Indian, Asian'/>
         <RestaurantCard resName='KFC' cuisine='Burger and Fast Food'/> 
                 in above we can pass any number of props 
           
              listOfRestaurants.map(restaurant)=>(
                   <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
               )) */}

      </div>
      </div>
   

  );
}

export default Body
