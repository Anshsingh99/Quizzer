import React, { useState, useEffect } from "react";
import "../App.css";
import Popup from "./Popup";
import axios from "axios";
const Createdquiz = (props) => {
  
  const [userAnswers, setUserAnswers] = useState(props.questions!==undefined?new Array(props.questions.length).fill(''):null);
  useEffect(() => {
    if (props.questions === undefined) {
      axios.get('https://quizzer.if-anshansh.repl.co/get').then((re)=>{
        console.log('direct request, getting data....')
        props.setQuestions(re.data['questions']);
    props.setOptions(re.data['options']);
    props.setAnswers(re.data['answers']);
    props.setQuizname(re.data['title'])
    setUserAnswers(new Array(re.data['questions'].length).fill(''))
   
      })
    }
  },[]);
  
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setUserAnswers((prevAnswers) => {
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
  };

  const calculateScore = () => {
    var score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === props.answers[i]) {
        score++;
      }
    }
    return score;
  };
  
  return (
    <div className="label-color">
    
      <h2>{props.Quizname}</h2>
      {userAnswers!==null&&props.questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {props.options[index].map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  value={optionIndex + 1}
                  name={`question_${index}`}
                  checked={userAnswers===null?false:userAnswers[index] === String(optionIndex + 1)}
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
          {isOpen && (
            <Popup
              content={
                <>
                  <p className="score-text">
                    You scored: {calculateScore()} out of{" "}
                    {props.questions.length}
                  </p>
                </>
              }
              handleClose={closePopup}
            />
          )}
        </div>
      ) : (
        <button className="start-quiz-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Createdquiz;
