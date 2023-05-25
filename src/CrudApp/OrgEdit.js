import React from "react";
class OrgEdit extends React.Component{

    constructor(props){
        super(props);

    }

    render(){

        return(

            <div>
                 
                {(this.props.OrgEdit!=="")?
                <div>
                   <h1> Add a Details For Servaing</h1>
                   <div>
                   

                       <label> Name : </label>
                       <input type="text" id="myName" name='myName' onChange={this.mynameMet}  value={this.props.OrgEdit.names} maxLength={10}></input>
                   </div>
                   <div>
                       <label> Age : </label>
                       <input type="text" id="age" name='age' onChange={this.myageMet}  value={this.props.OrgEdit.age} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Roll : </label>
                        <input type="text" id="roll" name='roll' onChange={this.myrollMet} value={this.props.OrgEdit.roll} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Phone : </label>
                        <input type="password" id="phone" name='phone' onChange={this.myphoneMet} value={this.props.OrgEdit.phone} maxLength={10}></input>
                    </div>
                    <div>
                        <label> Address : </label>
                        <input type="text" id="address" name='address' onChange={this.myaddressMet} value={this.props.OrgEdit.address} maxLength={10}></input>
                    </div>
                    <button onClick={this.addListSubmite}> Submit</button>
                </div>
               :""}
            </div>
                
        );
    }
}

export default OrgEdit;