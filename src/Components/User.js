import { useState } from "react";
const User=({name})=>
{
    const count=useState(0);
    return(
        <div className="userInfo">
            <h1>Name: {name}</h1>
            <h3>Count= {count}</h3>
        </div>
    )
}
export default User;