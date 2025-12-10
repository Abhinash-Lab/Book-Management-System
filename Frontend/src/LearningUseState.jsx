import { useState } from "react"

const LearningUseState = ()=>{

  const [Number,setNumber] = useState(0);
  

  function increaseNumber(){
    setNumber(Number + 1);
  }
  function decreaseNumber(){
    setNumber(Number - 1);
  }

  return(
    <>
    <div>
      <h1>{Number}</h1>
      <button onClick={increaseNumber}>+</button>
      <button onClick={decreaseNumber}>-</button>
    </div>
    </>
  )
}

export default LearningUseState;