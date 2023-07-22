import React from 'react'
import '../App.css'
import QuesTile from './QuesTile'
const Questions = (props) => {
 
  const allComponents=new Array(props.qno).fill(<QuesTile setQue={props.setQue} setOpt={props.setOpt} setAns={props.setAns} Que={props.Que} Opt={props.Opt} Ans={props.Ans}/>)
  return (
    <div>
        
        {/* <input id='1' className='input-questions' placeholder='Enter the number of Questions' ></input> */}
        <label className="label-color">Enter The Name Of Quiz</label><br/>
        <input placeholder='Quiz name' onChange={event=>{props.setQuizname(event.target.value)}}></input><br/>
        
        <label className="label-color">Enter the Number of Questions for Quiz:</label><br/>
        <input type="number" placeholder='Enter the number of Questions' value={props.qno}step={1} min={0}  onChange={(event) => {
          const newValue = event.target.value
          
          const parsedValue = parseInt(newValue)
          if (parsedValue < 0 || isNaN(parsedValue)) {
            console.warn("Cannot set");
            // Do some error handling
            return 
          }
          console.log("setting", parsedValue)
          props.setqno(parsedValue)
        }} />
        {/* <button className='quiz-no-button'  onClick={navigateToQuesTile}>Submit</button> */}
        
        <div>
          {allComponents.map((elem, index) => (
            <React.Fragment key={index}>
              {elem}
            </React.Fragment>
          ))} 
          <button  onClick={props.dosome} className='submit-btn'>Submit</button>
          <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
          {/* <button  onClick={props.getsom}>get</button> */}
          {/* <button  onClick={navigateToPlayQuiz} className='submit-btn'>Play</button> */}
         </div>
       
    </div>
  )
}

export default Questions

// on onClick={()=>{
//   var ques=document.getElementById("1")
//   console.log(ques.value);
  
// }}