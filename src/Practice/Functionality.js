

var Show =(props)=>{
    
    return(
    <div>
        <h1>Count Application: </h1>
        <h3>Count:{props.st.count}</h3>
        <div>
            <label>Increse:</label>
            <button onClick={props.d}>+1</button> 
        </div>
    </div>
    );
}
export default Show;