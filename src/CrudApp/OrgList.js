import React from 'react';

class ListOrg extends React.Component{

    render(){
        
        return(
            <div>
                <table>
                  <tr>
                    <th>Name</th>
                     <th>Age</th>
                     <th>Address</th>
                     <th>Roll</th>
                     <th>Phone</th>
                   </tr>
                   
                        {this.props.listData.map((s)=>(
                            <div>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.address}</td>
                            </div>
                        ))
                        }
              </table>
            </div>
        )
    }
}

export default ListOrg;