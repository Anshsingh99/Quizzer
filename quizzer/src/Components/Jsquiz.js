import React, { useState,useEffect} from 'react';
import '../App.css'
import Popup from './Popup';
import axios from 'axios';
const Jsquiz = (props) => {
  useEffect(() => {
    console.log('ji');
      if(props.Jsquestions === undefined){
      axios.get('https://quizzer.if-anshansh.repl.co/getJs').then((re)=>{
        console.log('direct request, getting data....')
        props.setJsQuestions(re.data['Jsquestions']);
        props.setJsOptions(re.data['Jsoptions']);
        props.setJsCorrectAnswers(re.data['JsanswersKey']);  
      })
    }
},[props]);

  const [userAnswers, setUserAnswers] = useState(props.Jsquestions===undefined? []:new Array(props.Jsquestions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  }
 
  const handleSubmit = () => {
    setSubmitted(true);
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(!isOpen);
  }
  const calculateScore = () => {
    var score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === String(props.JsanswersKey[i])) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className='label-color'>
      <h2>JavaScript Quiz</h2>  
      {props.Jsquestions!==undefined&&props.Jsquestions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {props.Jsoptions[index].map((option, optionIndex) => (
            <div key={optionIndex}>
              <label >
                <input
                  type="radio"
                  value={optionIndex + 1}
                  name={`question_${index}`}
                  onChange={(e) => handleInputChange(e, index)}
                  disabled={submitted} 
                />
                {option}
              </label>
            </div>
          ))}
      
          <div>
            <label>
              <input
                type="text"
                placeholder="Enter your answer here"
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(e, index)}
                disabled={submitted} 
              />
            </label>
          </div>
        </div>
      ))}
      {submitted ? (
        <div>
        {isOpen && <Popup
content={<>
  {props.Jsquestions!==undefined&&<p className='score-text'>You scored: {calculateScore()} out of {props.Jsquestions.length}</p>}
</>}
   handleClose={closePopup}
/>}
      </div>
      ) : (
        <button onClick={handleSubmit} className='start-quiz-button'>Submit</button>
      )}
    </div>
  );
};

export default Jsquiz;