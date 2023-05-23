import React from 'react';


class AddMain extends React.Component{
   
    constructor(props){
        super(props);
     this.mynameMet = this.mynameMet.bind(this);
     this.myageMet = this.myageMet.bind(this);
     this.myrollMet = this.myrollMet.bind(this);
     this.myphoneMet = this.myphoneMet.bind(this);
     this.myaddressMet = this.myaddressMet.bind(this);

     this.addListSubmite=this.addListSubmite.bind(this);

     this.inputValue="";
     this.inputAge="";
     this.inputRoll="";
     this.inputAdress="";
     this.inputPhone="";
    }

    mynameMet(e){
         var name= e.target.value;
         this.inputValue=name;
         var action="name";
        this.props.as(name,action);
    }
    myageMet(e){
        var age= e.target.value;
        var action="age";
        this.inputAge=age;

        this.props.as(age,action);
    }
    myrollMet(e){
        var roll= e.target.value;
        var action="roll";
        this.inputRoll=roll;

        this.props.as(roll,action);
    }
    myphoneMet(e){
         var phone= e.target.value;
         var action="phone";
         this.inputAdress=phone;

        this.props.as(phone,action);
    }
    myaddressMet(e){
         var address= e.target.value;
         var action="address";
         this.inputPhone=address;

        this.props.as(address,action);
    }

    addListSubmite(e){
        this.props.listSaveDta();
        this.inputValue='';
        this.inputAge='';
        this.inputRoll='';
        this.inputAdress='';
        this.inputPhone='';
      
    }
    
    render(){
        return(
            <div>
                <div>
                   <h1> Add a Details For Servaing</h1>
                   <div>
                       <label> Name : </label>
                       <input type="text" id="myName" name='myName' onChange={this.mynameMet}  value={this.inputValue} maxLength={10}></input>
                   </div>
                   <div>
                       <label> Age : </label>
                       <input type="text" id="age" name='age' onChange={this.myageMet}  value={this.inputAge} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Roll : </label>
                        <input type="text" id="roll" name='roll' onChange={this.myrollMet} value={this.inputRoll} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Phone : </label>
                        <input type="password" id="phone" name='phone' onChange={this.myphoneMet} value={this.inputAdress} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Address : </label>
                        <input type="text" id="address" name='address' onChange={this.myaddressMet} value={this.inputPhone} maxLength={10}></input>
                    </div>
                    <button onClick={this.addListSubmite}> Submit</button>
                </div>
            </div>
        );
    }
}

export default AddMain;