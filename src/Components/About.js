import User from "./User";
import UserClass from "./UserClass";
// class About extends React.Component{
//       constructor(props){
//           console.log("Parent constuctor"); 
//           super(props); 
//       }
//       render(){
//       console.log("Parent Render"); 
//        return(
//            <div>
//                <UserClass name="Pooja" />
//            </div>
//       );
// }
// }


function About()
{
     return(
        <div>
            <User name={"Pooja"} location={"Hyderabad"}/> 
            <UserClass name={"Pooja G"} location={"Bangalore"} count={"1"} count2={"2"}/>
        </div>
     )
}
export default About;
