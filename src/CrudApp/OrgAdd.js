import React from 'react';


class AddMain extends React.Component{
   
    constructor(props){
        super(props);
     this.mynameMet = this.mynameMet.bind(this);
    }

    mynameMet(){
        // var name= e.target.value;
        this.props.as();
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