import { useEffect } from "react";
import { useState } from "react";
//creation of custom hook
const useOnlineStatus=()=>
{
    const [onlineStatus,setOnlineStatus]=useState();  
    //check online
        useEffect(()=> //event handlers check when the internet is offline and online based on that return the status
        {
            window.addEventListener("offline", () => {
                setOnlineStatus(false);
            });
            window.addEventListener("online",()=>
            {
               setOnlineStatus(true);
            });
        },[]);
 
      //return boolean

    return onlineStatus;
}
export default useOnlineStatus;