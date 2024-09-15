import React from "react";
class UserClass extends React.Component
{
    constructor(props){
     //whenever instance of class created this constructor is called. This is best place to create props and to create state variables
     console.log("Child constructor");
      super(props);
    console.log(props);
    // //creation of multiple state variables inside class based component
     this.state={
       userInfo:{ //state variable is created with some default value
          name:"Dummy",
          location:"Default",
          avatar_url:"http://dummy-photo.com",
       },
     };
   console.log("constructor");
    }
    
    
    async componentDidMount() {
      const data=await fetch("https://api.github.com/users/Pooja-Gongalla");
        const json=await data.json();
       this.setState({ 
        userInfo:json,
       });
        console.log(json);
      console.log("ComponentDidMount is called");
    }
    componentDidUpdate()
    {
      console.log("component update");
    }
    componentWillUnmount()
    {
      console.log("component will unmount");
    }
  render()
    { 
       // const {name, location}=this.props;
        // const {count}=this.state;
        const {name,location,avatar_url}=this.state.userInfo;
       console.log("Child render");
        return(
            <div>
               {/* // <h3>Name:{this.props.name}</h3>
                /<h3>Name:{this.props.location}</h3> */}
                 {/* <button className="btncount" onClick={()=>{
                    //usage of state variable in react
                    this.setState({
                          count:this.state.count+1, //if we want to increase count2 also update here only no need to create the new this.setState
                        });
              }}>Count Increase</button> */}
                {/* <h3>Count={count}</h3> //destructing count
                <h3>Count2={this.props.count2}</h3> */}
               { /* react will update dummry data for a while instead of below one*/ }
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                {/* <h2>Contact:{Contact}</h2> */}
              </div>
        );
    }
}
 


export default UserClass;