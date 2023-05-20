
import React from "react";

// class Show extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Count Application:{this.props.head}</h1>
//                 <h3>Count:{this.props.stat.count}</h3>  
//                 <div>
//                     <label>Increse:</label>
//                     <button onClick={this.props.incremen}>+1</button> 
//                 </div>
//             </div>
//         )
//     }
// }
var Show =(props)=>{
    return(
        <div>
                <h1>Count Application:{props.head}</h1>
                <h3>Count:{props.stat.count}</h3>  
                <div>
                    <label style={{color:'green',fontFamily:"unset"}}>Increse:</label>
                    <button onClick={props.incremen}>+1</button> 
                </div>
        </div>
    );
}
export default Show;