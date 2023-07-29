import React, { useState,useEffect} from 'react';
import '../App.css'
import Popup from './Popup';
import axios from 'axios';
const Flutterquiz = (props) => {
  
  useEffect(() => {
    console.log('ji');
      if(props.Flquestions === undefined){
      axios.get('https://quizzer.if-anshansh.repl.co/getFl').then((re)=>{
        console.log('direct request, getting data....')
        props.setFlQuestions(re.data['Flquestions']);
        props.setFlOptions(re.data['Floptions']);
        props.setFlCorrectAnswers(re.data['FLanswersKey']);  
      })
    }
},[props]);


  const [userAnswers, setUserAnswers] = useState(props.Flquestions === undefined ? [] :new Array(props.Flquestions.length).fill(''));

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
      if (userAnswers[i] === String(props.FLanswersKey[i])) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className='label-color'>
      <h2>Flutter Quiz</h2>
      {props.Flquestions!==undefined&&props.Flquestions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {props.Floptions[index].map((option, optionIndex) => (
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
  {props.Flquestions!==undefined&&<p className='score-text'>You scored: {calculateScore()} out of {props.Flquestions.length}</p>}
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