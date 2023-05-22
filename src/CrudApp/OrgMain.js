import React from "react";

import OrgAdd from "./OrgAdd";
class ComMain extends React.Component{
   // _isMounted = false;

    constructor(names,age,roll){
        super();

        //Attrebutes Decalaration
         this.name= names;
         this.age=age;
         this.roll=roll;
        // this.phone=this.phone;
        // this.address=this.address;

        this.state={
            myname: "",
            age:"",
            rollNo:"",
            phone:"",
            address:""
        };

        //Methods Declaration
       // this.addNameAgeRoll =this.addNameAgeRoll.bind(this);
      //  this.getSetstate=this.getSetstate.bind(this);
    }

    

    componentWillUnmount() {
        alert("componentwill")
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
        // this.addNameAgeRoll = this.addNameAgeRoll.bind(this);
         alert("p");
        //     this.setState({ myname: "ddd" });
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