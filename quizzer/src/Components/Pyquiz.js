import React, { useState } from 'react';
import '../App.css' 
import Popup from './Popup';
const Pyquiz = () => {
    const questions = [
        "1. What is the result of the following expression? 3 + 5 * 2",
        "2. Which of the following data types is mutable in Python?",
        "3. What does the 'len()' function return?",
        "4. What is the output of this code? print('Hello, ' + 'world!')",
        "5. How do you create a function in Python?",
        "6. What is the correct way to open a file 'data.txt' for writing?",
        "7. What is the output of this code? print(10 / 3)",
        "8. How do you add an element to a list in Python?",
        "9. What does the 'import' keyword do in Python?",
        "10. How do you check the number of elements in a list?"
      ];
    
      const options = [
        ["1) 10", "2) 13", "3) 8", "4) 16"],
        ["1) int", "2) str", "3) list", "4) tuple"],
        ["1) The length of a string", "2) The number of elements in a list", "3) The sum of a tuple", "4) The maximum value in a dictionary"],
        ["1) Hello, world!", "2) Hello + world!", "3) Hello, + world!", "4) Hello +, world!"],
        ["1) def my_function():", "2) function my_function():", "3) create my_function():", "4) my_function():"],
        ["1) file = open('data.txt', 'r')", "2) file = open('data.txt', 'wb')", "3) file = open('data.txt', 'w')", "4) file = open('data.txt', 'write')"],
        ["1) 3.333", "2) 3.0", "3) 3", "4) 3.33"],
        ["1) list.append(item)", "2) list.add(item)", "3) list.insert(item)", "4) list.extend(item)"],
        ["1) It defines a new class", "2) It includes a module in the code", "3) It reads user input", "4) It allows access to external functions"],
        ["1) len(list)", "2) size(list)", "3) count(list)", "4) length(list)"],
      ];
    
  const correctAnswers = [3, 3, 2, 1, 1, 3, 2, 1, 2, 1];


  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));

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
      if (userAnswers[i] === String(correctAnswers[i])) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className='label-color'>
      <h2>Python Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {options[index].map((option, optionIndex) => (
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
  <p className='score-text'>You scored: {calculateScore()} out of {questions.length}</p>
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