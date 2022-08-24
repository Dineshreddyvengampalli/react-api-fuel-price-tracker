let DisplayPrice = (props) =>{
    let data = props.data
    return(
        <ul>
            {data.map((eachData)=>(
                <div>
                    <h1>{eachData.state}</h1>
                    <h1>Diesel Price : {eachData.dieselPrice}</h1>
                </div>
            ))}
        </ul>
    )
    
}

export default DisplayPrice