import React,{useState} from 'react'

export const UseStateComp = () => {
    const[count,setCount]=useState(0);
    const[name,setname]=useState('Askhay');
    const [breakfast,setbreakfast]=useState([
        {id:1,name:"Vadapav"},
        {id:2,name:"samosa"},
        {id:3,name:"poha"},
        {id:4,name:"kachori"},
        {id:5,name:"bajiyaa"}
    ])

    const counterinc=()=>{
        setCount(count+1)
    }

    return (
        <div>
            
            <h3>This is state comp</h3>
            <p>Counter value is : <strong>{count}</strong></p>
            <button type='button' onClick={()=>counterinc()}>for ++</button>&nbsp;
            <button type='button' onClick={()=> setCount(count+1)}>for++</button>
            <h3>-------------------------------------------------------------</h3>
            <p>Counter value is : <strong>{name}</strong></p>
            <button type='button' onClick={()=> setname("Askhay Patil")}>change name</button>
            <h3>------------------------------------------------------------</h3>

             <ul>
                {breakfast.map((val,index)=>{
                    return <li key={val.id}>{val.name}</li>
                })}
             </ul>

           
        </div>
    )
}
export default UseStateComp