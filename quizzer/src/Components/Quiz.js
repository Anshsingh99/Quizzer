import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
const Quiz = () => {
    const navigate = useNavigate();

    const navigateToPyQuestions = () => {
        navigate('/Pyquiz');
      };

    const navigateToJsQuiz = () => {
        navigate('/Jsquiz');
      };

      const navigateToFlutterQuiz = () => {
        navigate('/Flutterquiz');
      };
  return (
    <div className='App'>
        <h1>Choose Which Quiz You Want To Play</h1>
        <button className='start-quiz-button' onClick={navigateToPyQuestions} >Python Quiz</button><br/>
        <p>

        </p>
        <button className='start-quiz-button' onClick={navigateToJsQuiz} >JavaScript Quiz</button><br/>
        <p>
                
        </p>
        <button className='start-quiz-button' onClick={navigateToFlutterQuiz} >Flutter Quiz</button>
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
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Quiz