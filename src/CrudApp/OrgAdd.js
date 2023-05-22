import React from 'react';

import OrgMain from './OrgMain';

class AddMain extends React.Component{
  
    //orgMain=new OrgMain;
    constructor(props){
        super(props);
       // this.increment = this.increment.bind(this);
        this.saveData= this.saveData.bind(this);
        this.mynameMet=this.mynameMet.bind(this);
    }

    saveData(e){
        alert("hello");
        // orgMain=new OrgMain;
        // var s=orgMain.getSetstate();
        // alert(JSON.stringify(s)+"--in")

         //  var name= e.target.myName.value;
          // alert(name);
    }

    mynameMet(e){
        var name= e.target.value;
        //var s=new OrgMain(name,"","");
        this.props.as;
    }
    
    // ageMet(){
    //     var name= e.target.value;
    //     alert(name);
    // }
    render(){
        return(
            <div>
                <div>
                   <h1> Add a Details For Servaing</h1>
                   <div>
                       <label> Name : </label>
                       <input type="text" id="myName" name='myName' onChange={this.mynameMet}  maxLength={10}></input>
                   </div>
                   <div>
                       <label> Age : </label>
                       <input type="text" id="age" name='age' onChange={this.ageMet}  maxLength={10}></input>
                    </div>
                    <div>
                        <label> Roll : </label>
                        <input type="text" id="roll" name='roll' onChange={this.rollMet} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Phone : </label>
                        <input type="password" id="phone" name='phone' onChange={this.phoneMet}  maxLength={10}></input>
                    </div>
                    <div>
                        <label> Address : </label>
                        <input type="text" id="address" name='address' onChange={this.addressMet} maxLength={10}></input>
                    </div>
                    <button onClick={this.saveData}> Submit</button>
                </div>
            </div>
        );
    }
}

export default AddMain;