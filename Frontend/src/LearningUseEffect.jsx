import { useEffect, useState } from "react"

const LearningUseEffect = ()=> {


  useEffect(() =>{
    console.log("Effect Executed")
  })
  return(
  <>
  {/* normal without dependency list */}
  <h1>without dependency list</h1>
  
  </>
  )
}

const LearningUseEffect2 = () =>{

  useEffect(()=>{
    console.log("with empty array");
  },[])

  return(<>
  <h1>With Empty Array</h1>
  </>)
}

const LearningUseEffect3 = ()=>{

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [message, setMessage] = useState("Null");

  function changeNum1 (){
    return setNum1(num1 + 1);
  }

  function changeNum2 (){
    return setNum2(num2 + 1);
  }

  useEffect(()=>{
    setMessage(`The value changed ${num1} times`)
  },[num1,num2])

  return(<>
  <h1>{message}</h1>
  <button onClick={changeNum1}>Num1</button>
  <button onClick={changeNum2}>Num2</button>
  </>)
}


export{LearningUseEffect,LearningUseEffect2,LearningUseEffect3};