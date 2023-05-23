import React from 'react';

class ListOrg extends React.Component{

    constructor(props){
        super(props);
        this.editChange = this.editChange.bind(this);

    }
    editChange(name){
        alert(name+"--name")
        this.props.getListOfDataBasedOnName(name);
    }

    render(){
        
        return(
            <div>
                {/* <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                     <th>Age</th>
                     <th>Address</th>
                     <th>Roll</th>
                     <th>Phone</th>
                     <th>edit</th>
                   </tr>
                        {this.props.listData.map((s)=>(
                            <div>
                                <td>{s.names}</td>
                                <td>{s.age}</td>
                                <td>{s.roll}</td>
                                <td>{s.phone}</td>
                                <td>{s.address}</td>
                                <td><button key={s.names} id="edit" className='edit' onClick={this.editChange("dd")}>Edit</button></td>
                                 
                            </div>
                        ))
                        }
                        </tbody>
              </table> */}

              <div>
                     <p>Name</p>
                     <p>Age</p>
                     <p>Address</p>
                     <p>Roll</p>
                     <p>Phone</p>
                     <p>edit</p>
              </div>
              {/* <div>
              {this.props.listData.map((s)=>(
                            <div id={s.names} >
                                <p>{s.names}</p>
                                <p>{s.age}</p>
                                <p>{s.roll}</p>
                                <p>{s.phone}</p>
                                <p>{s.address}</p>
                                <p><button key={s.names} id="edit" className='edit' onClick={this.editChange("dd")}>Edit</button></p>
                                 
                            </div>
                        ))
                        }

              </div> */}
            <ul>
                {this.props.listData.map((item) => (
                    <li key={item.names}>
                        <li key={item.names}>{item.names}</li>
                        <li key={item.age}>{item.age}</li>
                        <li key={item.roll}>{item.roll}</li>
                        <li key={item.phone}>{item.phone}</li>
                        <li key={item.address}>{item.address}</li>
                    <span>{item.name}</span>
                    <button onClick={() => this.editChange(item.names)}>Update</button>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

export default ListOrg;