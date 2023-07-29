import React, { useState,useEffect } from 'react';
import '../App.css' 
import Popup from './Popup';
import axios from 'axios';
const Pyquiz = (props) => {
   useEffect(() => {
    console.log('ji');
      if(props.Pyquestions === undefined){
      axios.get('https://quizzer.if-anshansh.repl.co/getPy').then((re)=>{
        console.log('direct request, getting data....')
        props.setPyQuestions(re.data['Pyquestions']);
        props.setPyOptions(re.data['Pyoptions']);
        props.setCorrectAnswers(re.data['PyanswersKey']);   
      })
    }
},[props]);

  const [userAnswers, setUserAnswers] = useState(props.Pyquestions === undefined ? [] :new Array(props.Pyquestions.length).fill(''));

  // State to store whether the quiz has been submitted
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  // Function to handle input change
  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  // Function to handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
    setIsOpen(true)
  };
  const closePopup = () => {
    setIsOpen(!isOpen);
  }

  // Function to calculate the score
  const calculateScore = () => {
    var score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === String(props.correctAnswers[i])) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className='label-color'>
      <h2>Python Quiz</h2>
      {props.Pyquestions!== undefined&&props.Pyquestions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {props.Pyoptions[index].map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  value={optionIndex + 1}
                  name={`question_${index}`}
                  checked={userAnswers[index] === String(optionIndex + 1)}
                  onChange={(e) => handleInputChange(e, index)}
                  disabled={submitted} // Disable inputs after submission
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
                disabled={submitted} // Disable inputs after submission
              />
            </label>
          </div>
        </div>
      ))}
      {submitted ? (
        <div>
        {isOpen && <Popup
content={<>
  {
    props.Pyquestions!==undefined && <p className='score-text'>You scored: {calculateScore()} out of {props.Pyquestions.length}</p>
  }
</>}
   handleClose={closePopup}
/>}
      </div>
      ) : (
        <button className="start-quiz-button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Pyquiz;