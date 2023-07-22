import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup';
const Jsquiz = (props) => {
    const questions = [
        "1.What is the correct way to declare a JavaScript variable?",
        "2.Which operator is used for strict equality check in JavaScript?",
        "3.What does the 'typeof' operator return?",
        "4.What is an example of a JavaScript primitive data type?",
        "5.How do you write a single-line comment in JavaScript?",
        "6.What is the purpose of 'NaN' in JavaScript?",
        "7.What keyword is used to define a function in JavaScript?",
        "8.What is the result of '3' + 2 in JavaScript?",
        "9.How do you check if a variable is an array in JavaScript?",
        "10.What is the purpose of 'JSON.parse()' in JavaScript?"
      ];

      const options = [
        ["1.var name;", "2.variable name;", "3.v name;", "4.variable-name;"],
        ["1.===", "2.==", "3.=", "4.===="],
        ["1.string", "2.number", "3.boolean", "4.object"],
        ["1.null", "2.undefined", "3.boolean", "4.string"],
        ["1. // This is a comment", "2. /* This is a comment */", "3. # This is a comment", "4. /* This is a comment */"],
        ["1.To represent an error state", "2.To represent a valid number", "3.To represent a boolean value", "4.To represent a function"],
        ["1.function", "2.func", "3.def", "4.fun"],
        ["1. 32", "2. 5", "3. 52", "4. 7"],
        ["1.Array.isArray(myVar)", "2.myVar.isArray()", "3.isArray(myVar)", "4.myVar instanceof Array"],
        ["1.To parse a JSON object into a JavaScript object", "2.To stringify a JavaScript object into JSON", "3.To validate JSON data", "4.To create a JSON object"]
      ];
         
      const correctAnswers = [1, 4, 2, 3, 1, 1, 1, 3, 1, 1];

  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));
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
      if (userAnswers[i] === String(correctAnswers[i])) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className='label-color'>
      <h2>JavaScript Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {options[index].map((option, optionIndex) => (
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
  <p className='score-text'>You scored: {calculateScore()} out of {questions.length}</p>
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