import React from 'react'; 
import Functionality from './ReactPractice';
class PracticeCount extends React.Component{

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
            <Functionality d={this.increment}
            st={this.state}
            />
        )
    }
} 


export default PracticeCount;