import React from 'react';


class AddMain extends React.Component{
   
    constructor(props){
        super(props);
     this.mynameMet = this.mynameMet.bind(this);
     this.myageMet = this.myageMet.bind(this);
     this.myrollMet = this.myrollMet.bind(this);
     this.myphoneMet = this.myphoneMet.bind(this);
     this.myaddressMet = this.myaddressMet.bind(this);
    }

    mynameMet(e){
         var name= e.target.value;
         var action="name";
        this.props.as(name,action);
    }
    myageMet(e){
        var age= e.target.value;
        var action="age";
        this.props.as(age,action);
    }
    myrollMet(e){
        var roll= e.target.value;
        var action="roll";
        this.props.as(roll,action);
    }
    myphoneMet(e){
         var phone= e.target.value;
         var action="phone";
        this.props.as(phone,action);
    }
    myaddressMet(e){
         var address= e.target.value;
         var action="address";
        this.props.as(address,action);
    }


  
    
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
                       <input type="text" id="age" name='age' onChange={this.myageMet}  maxLength={10}></input>
                    </div>
                    <div>
                        <label> Roll : </label>
                        <input type="text" id="roll" name='roll' onChange={this.myrollMet} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Phone : </label>
                        <input type="password" id="phone" name='phone' onChange={this.myphoneMet}  maxLength={10}></input>
                    </div>
                    <div>
                        <label> Address : </label>
                        <input type="text" id="address" name='address' onChange={this.myaddressMet} maxLength={10}></input>
                    </div>
                    <button onClick={this.props.listSaveDta}> Submit</button>
                </div>
            </div>
        );
    }
}

export default AddMain;