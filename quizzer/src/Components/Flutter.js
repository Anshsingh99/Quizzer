import React, { useState } from 'react';
import '../App.css'
import Popup from './Popup';
const Flutterquiz = (props) => {
  
 const questions = [
    "1. What is Flutter?",
    "2. What language is Flutter based on?",
    "3. What widget is used to create a reusable part of the user interface in Flutter?",
    "4. What is the main function in a Flutter app?",
    "5. What is a StatefulWidget in Flutter?",
    "6. How do you add padding around a widget in Flutter?",
    "7. What is the purpose of the 'setState' method in Flutter?",
    "8. How do you navigate to a new screen in Flutter?",
    "9. What is the 'pubspec.yaml' file used for in a Flutter project?",
    "10. What is the purpose of a 'BuildContext' in Flutter?"
  ];
 
  const options = [
    ["1. A mobile app development framework", "2. A programming language", "3. A version control system", "4. An IDE for Flutter development"],
    ["1. Dart", "2. Java", "3. Swift", "4. JavaScript"],
    ["1. Widget", "2. Component", "3. Element", "4. Container"],
    ["1. main()", "2. runApp()", "3. start()", "4. init()"],
    ["1. A widget that cannot be changed", "2. A widget that can be changed", "3. A stateless widget", "4. A widget that has no child"],
    ["1. Use a Padding widget", "2. Use the margin property", "3. Wrap it with a Center widget", "4. Flutter automatically adds padding"],
    ["1. To create a new widget", "2. To update the state of a widget", "3. To change the layout of the app", "4. To perform asynchronous tasks"],
    ["1. Navigator.push()", "2. Navigator.go()", "3. Navigator.pushScreen()", "4. Navigator.navigateTo()"],
    ["1. To specify the app's name", "2. To define the app's package name", "3. To list all installed packages", "4. To manage app dependencies"],
    ["1. It's a function to build the UI", "2. It's used to retrieve the parent widget", "3. It's used to rebuild the widget tree", "4. It provides contextual information about the widget"]
  ];

  const correctAnswers = [1, 1, 1, 1, 2, 1, 2, 1, 4, 4];


  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));

  const [submitted, setSubmitted] = useState(false);
  const[isOpen,setisOpen]=useState(false)

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
    setisOpen(true)
  };
  const closePopup = () => {
    setisOpen(!isOpen);
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
      <h2>Flutter Quiz</h2>
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
        <button className="start-quiz-button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Flutterquiz;