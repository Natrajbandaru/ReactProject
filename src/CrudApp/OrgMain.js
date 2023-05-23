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
            // data:{},
            names:'',
            age:'',
            roll:'',
            phone:'',
            address:'',
            listitems: []
        };
        this.a={};
        
        this.addNameAgeRoll = this.addNameAgeRoll.bind(this);
        this.addValuesToList =this.addValuesToList.bind(this);
        this.getListOfDataBasedOnName =this.getListOfDataBasedOnName.bind(this);
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
                    this.setState({names:value});
                }
                else if(action==='age'){
                    this.a.age=value;
                     this.setState({age: value});
                }
                else if(action==='roll'){
                    this.a.roll=value;
                    this.setState(()=>{return {roll:value}});
                }
                else if(action==='phone'){
                    this.a.phone=value;
                    this.setState({phone: value});
                }
                else if(action==='address'){
                    this.a.address=value;
                    this.setState({address: value});
                }   
              //  this.setState({data: this.a});
           //  alert(JSON.stringify(this.state.data)+"--name")
    }

    addValuesToList(){
        alert(JSON.stringify(this.state)+"--name");
       // this.setState(()=> {listitems:[...this.state.listitems],this.state.data})
      // this.setState((prev)=> ({listitems:[...this.state.listitems,,this.state.data]}))
      var [names,age,roll,phone,address]=[this.state.names,this.state.age,this.state.roll,this.state.phone,this.state.address];
      var obj={names,age,roll,phone,address}
        this.setState((prev)=> {
            return{
                listitems:[...this.state.listitems,obj],
                data: '',
            }
        })
    }

    getListOfDataBasedOnName(namea){
       var sd= this.state.listitems.filter((s)=>{
            return namea === s;
        }); 

        this.setState(()=>{})
      
    };
    
    render(){
        return(
            <div>
                <OrgAdd as={this.addNameAgeRoll} listSaveDta={this.addValuesToList}/>
                <ListData listData={this.state.listitems}  getListOfDataBasedOnName = {this.getListOfDataBasedOnName}/>
            </div>
        )
    }
    
}

export default ComMain;
