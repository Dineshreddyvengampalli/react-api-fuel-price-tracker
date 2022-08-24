import {useState} from 'react'
import DisplayPrice from './DisplayPrice'
let GetFuelData = ()=>{
    const [fuelData,setFuelData] = useState([])
    let clickHandler = async()=>{
        let response =await fetch('https://mfapps.indiatimes.com/ET_Calculators/oilpricebycitystate.htm?type=city')
        let data = await response.json()
        let desiredData = data["results"]
        let dataTOSend = desiredData.map((eachData)=>{
            return{
                state : eachData.cityState,
                dieselPrice : eachData.dieselPrice

            }
        })
        setFuelData(dataTOSend)
        console.log(desiredData)
    }
    
    return(
        <div>
            <button onClick={clickHandler}>get fuel prices</button>
            <DisplayPrice data = {fuelData}/>

        </div>

    )
}

export default GetFuelData