import React ,{useEffect,useState}from 'react'
export const UseEffectComp = () => {
    const[count,setCount]=useState(0);
    const[salary,setsalary]=useState(800000);


    // case1:
    // useEffect(()=>{

    //     console.log("useeffect call");
    //     setCount(count+1)
    // })

    // case2:
    // useEffect(()=>{

    //     console.log("useeffect call");
    //     setCount(count+1)
    // },[])

    //case3:
    useEffect(()=>{

        console.log("useeffect call");
        setCount(count+6)

    },[salary])



    return (
        <div>
            <h3>This is effect</h3>
            <p>Counter value is : <strong>{count}</strong></p>
            <p>Counter value is : <strong>{salary}</strong></p>
          <button type='button' onClick={()=>setsalary(salary+10000)}>increments salary</button>
        </div>
    )
}
export default UseEffectComp;
