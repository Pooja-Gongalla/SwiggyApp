import { CDN_LINK } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { //destructuring(this destructuring is in JS) as well in below we can change like <h4>resName</h4> instead of repeatative writting resData.name and resData.avgRating
    name,
    avgRating,
    cloudinaryImageId,
    deliveryTime,
    costForTwo,
    cuisines
  } = resData;


  // function RestaurantCard(props) {
  //   // function RestaurantCard({resName,cuisine})  /*for above line you can do destructuring(this destructuring is in JS) as well in above we can change like <h4>resName</h4> instead of repeatative writting resData.name and resData.avgRating
  //   console.log(props);
  return (
    <div className="m-4 p-4 w-[230px] bg-gray-100 hover:bg-gray-200 flex flex-wrap">
      {/* //first bracket telling that there is js code inside and seconds bracket telling that there is object inside it. */}
     <img className='res-logo rounded-lg' alt='res-logo' src={CDN_LINK+cloudinaryImageId}/>
       
     {/* src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.cloudinaryImageId}  */}
        
      { /*
        below code is not dynamic just declared value
        {/* 
         <h4>4.4 stars</h4>
        <h4>38 minutes</h4> 

          <h3>{resData.name}</h3> (instead of writing resdata below many times in above used 
     const {
       name,
      rating
      } = resData;
       ) 
  */}
      <div className="font-bold py-4 text-xl">
  <h4>{name}</h4>
</div>
<div>
  <h4>{cuisines.join(", ")}</h4>
</div>
<div>
  <h3>{avgRating} stars</h3>
</div>
<div>
  <h3>{costForTwo}</h3>
</div>
<div>
  <h3>{resData.sla.deliveryTime} minutes</h3>
</div>
  </div>

  );
};

//Higher order function
//input restaurantCard=>restaurantCardPromoted

export default RestaurantCard
