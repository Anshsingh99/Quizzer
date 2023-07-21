import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";

const Playquiz = (props) => {
    const navigate = useNavigate();

    // const navigateToPlayQuestions = () => {
    //     props.getsom(
    //   };
  return (
    <div>
        
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
        <button className='start-quiz-button' onClick={props.getsom} >Play Quiz</button><br/>
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
    </div>
  )
}

export default Playquiz