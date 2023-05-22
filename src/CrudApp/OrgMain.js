import React from "react";

import OrgAdd from "./OrgAdd";
import ListData  from './OrgList'
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
            data:{},
            listitems: [],
        };
        this.a={};
        
      this.addNameAgeRoll = this.addNameAgeRoll.bind(this);
      this.addValuesToList =this.addValuesToList.bind(this);

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
    addNameAgeRoll(value,action){
                
                if(action==='name'){
                    this.a.name=value;
                  //  this.setState(()=>{a});
                }
                else if(action==='age'){
                    this.a.age=value;
                  //  this.setState({age: value});
                }
                else if(action==='roll'){
                    this.a.roll=value;
                //    this.setState({rollNo: value});
                }
                else if(action==='phone'){
                    this.a.phone=value;
                 //   this.setState({phone: value});
                }
                else if(action==='address'){
                    this.a.address=value;
                  //  this.setState({address: value});
                }   
                this.setState({data: this.a});
           //  alert(JSON.stringify(this.state.data)+"--name")
    }

    addValuesToList(){
        alert(JSON.stringify(this.state)+"--name");
       // this.setState(()=> {listitems:[...this.state.listitems],this.state.data})
      // this.setState((prev)=> ({listitems:[...this.state.listitems,,this.state.data]}))

      this.setState((prev)=> {
        return{
            listitems:[...this.state.listitems,this.state.data],
            data: '',
        }
     })


    }
    
    render(){
        return(
            <div>
                <OrgAdd as={this.addNameAgeRoll} listSaveDta={this.addValuesToList}/>
                <ListData listData={this.state.listitems}/>
            </div>
        )
    }
    
}

export default ComMain;
