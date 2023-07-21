import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup';
const Createdquiz = (props) => { 
    
      const [userAnswers, setUserAnswers] = useState(new Array(props.questions.length).fill(''));
    
      const [submitted, setSubmitted] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
    
      const handleInputChange = (event, index) => {
        const { value } = event.target;
        setUserAnswers(prevAnswers => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[index] = value;
          return updatedAnswers;
        });
      };
    
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
          if (userAnswers[i] == props.answers[i]) {
            score++;
          }
        }
        return score;
      };
    var i=0
      return (
        <div className='label-color'>
            
          <h2>{props.Quizname}</h2>
          {props.questions.map((question, index) => (
            <div key={index}>
              <p>{question}</p>
              {props.options[index].map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      value={optionIndex + 1}
                      name={`question_${index}`}
                      checked={userAnswers[index] === String(optionIndex + 1)}
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
        <p className='score-text'>You scored: {calculateScore()} out of {props.questions.length}</p>
      </>}
         handleClose={closePopup}
    />}
            </div>
          ) : (
            <button className="start-quiz-button" onClick={handleSubmit}>Submit</button>
          )}
          
    
        </div>
        
      );
}

export default Createdquiz