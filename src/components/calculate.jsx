import { useState } from "react"
import './calculate.css' 

export const Calculate =() =>{
    const [result,setResut]= useState(0)
    const [number1, setNumber1]= useState(0)
    const [number2 ,setNumber2]= useState (0)

    const handleAdd=()=> setResut(number1 + number2)
    const handleSubstrack=()=> setResut(number1 - number2)
    const handleMultiply=()=> setResut(number1 * number2)
    const handleDiv=()=> setResut(number1 / number2)

    return (
        <div className='div-calculater'>
            <h2>aqui va el resultado {result}</h2>
            <fieldset>
                <input onChange={(event)=>setNumber1(Number(event.target.value))} type="number" placeholder="ingresa numero 1"/>
                <input onChange={(event)=>setNumber2(Number(event.target.value))} type="number" placeholder="ingresa numero 2" />
            </fieldset>
            <fieldset>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubstrack}>-</button>
                <button onClick={handleMultiply}>*</button>
                <button onClick={handleDiv}>/</button>
            </fieldset>
            
        </div>
    )
}


