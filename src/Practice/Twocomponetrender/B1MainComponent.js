import React from 'react'; 


import B2Seccoundary from './B2Secoundary'

class TotalPractice extends React.Component{

    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.state={count:0};
    }
     
    increment(){
        this.setState((prev)=>{
            return {
                count:prev.count+1
            };
        });
    }
    render(){
  
        return(
        <div>
           <B2Seccoundary head={"hello"}  stat={this.state} incremen={this.increment}/>
        </div>
        )
    }
} 

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

export default TotalPractice;