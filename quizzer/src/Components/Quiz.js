import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Quiz = (props) => {
    const navigate = useNavigate();

    const navigateToPyQuestions = () => {
      axios.get('https://quizzer.if-anshansh.repl.co/getPy').then((re)=>{
        console.log('direct request, getting data....')
        console.log(re.da)
        props.setPyQuestions(re.data['Pyquestions']);
        props.setPyOptions(re.data['Pyoptions']);
        props.setCorrectAnswers(re.data['PyanswersKey']);  
        navigate('/Pyquiz'); 
      })
      };

    const navigateToJsQuiz = () => {
      axios.get('https://quizzer.if-anshansh.repl.co/getJs').then((re)=>{
        console.log('direct request, getting data....')
        console.log(re.data)
        props.setJsQuestions(re.data['Jsquestions']);
        props.setJsOptions(re.data['Jsoptions']);
        props.setJsCorrectAnswers(re.data['JsanswersKey']);  
        navigate('/Jsquiz');
      })
      };

      const navigateToFlutterQuiz = () => {
        axios.get('https://quizzer.if-anshansh.repl.co/getFl').then((re)=>{
        console.log('direct request, getting data....')
        console.log(re.da)
        props.setFlQuestions(re.data['Flquestions']);
        props.setFlOptions(re.data['Floptions']);
        props.setFlCorrectAnswers(re.data['FlanswersKey']);  
        navigate('/Flutterquiz');
      })
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