import React from "react";

import OrgAdd from "./OrgAdd";
class ComMain extends React.Component{
   // _isMounted = false;

    constructor(props){
        super(props);

        //Attrebutes Decalaration
        //  this.name= names;
        //  this.age=age;
        //  this.roll=roll;
        // this.phone=this.phone;
        // this.address=this.address;

        this.state={
            myname: "",
            age:"",
            rollNo:"",
            phone:"",
            address:""
        };
      this.addNameAgeRoll = this.addNameAgeRoll.bind(this);
       
    }


     
    // this.setState((prev)=>{
    //     return {
    //         count:prev.count+1
    //     };
    // });
    // addNameAgeRoll(phone, address){
    //     alert(this.name+"--names")
    //     this.setState((p)=>{
    //         alert(this.name+"_-opo")
    //         return{
    //             myname:"kdk",
    //             age:this.age,
    //             roll:this.roll,
    //             phone:phone,
    //             address:address
    //         };
    //     });
    // }

    addNameAgeRoll(){
         alert("p");
             this.setState({myname: "ddd" });
             alert(this.state.myname+"--name")
    }
    


    getSetstate(){
        alert(this.state.myname)
        alert(JSON.stringify(this.state));
        return this.state;
    }
 

    render(){
        return(
            <div>
                <OrgAdd as={this.addNameAgeRoll}/>
            </div>
        )
    }
    
}

export default ComMain;
