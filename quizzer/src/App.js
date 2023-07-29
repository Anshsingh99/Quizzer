import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import QuesTile from './Components/QuesTile';
import Questions from './Components/Questions';
import Pyquiz from './Components/Pyquiz';
import Jsquiz from './Components/Jsquiz';
import Flutterquiz from './Components/Flutter';
import Quiz from './Components/Quiz';
import Createdquiz from './Components/Createdquiz';
import { Routes, Route, Link, useNavigate  } from "react-router-dom";
import axios from 'axios';
import Playquiz from './Components/Playquiz';


function App() {
  //python quiz
   const [Pyquestions,setPyQuestions]=useState();
   const [Pyoptions,setPyOptions]=useState();
   const [correctAnswers,setCorrectAnswers]=useState();
  //flutter quiz
  const [Flquestions,setFlQuestions]=useState();
   const [Floptions,setFlOptions]=useState();
   const [FlcorrectAnswers,setFlCorrectAnswers]=useState();
   //js quiz
   const [Jsquestions,setJsQuestions]=useState();
   const [Jsoptions,setJsOptions]=useState();
   const [JscorrectAnswers,setJsCorrectAnswers]=useState();

  const navigate=useNavigate();
  const [qno,setqno]=useState(0)
    
  const [Que,setQue]=useState([]);
  const[Opt,setOpt]=useState([]);
  const[Ans,setAns]=useState([]);

  const[questions,setQuestions]=useState();
  const[options,setOptions]=useState();
  const[answers,setAnswers]=useState();

  const[Quizname,setQuizname]=useState('');
  const dosome = () => {
    
    axios.post("https://quizzer.if-anshansh.repl.co/post", {
        questions: Que,
        options: Opt,
        answersKey: Ans,
        title:Quizname,
    }).then(res=>{console.log(res.data);
      navigate('/Playquiz')
    }
    ); 
    
  }
  const getsom = ()=>{
    axios.get('https://quizzer.if-anshansh.repl.co/get').then((res)=>{
    setQuestions(res.data['questions']);
    setOptions(res.data['options']);
    setAnswers(res.data['answers']);
    console.log(res.data['title'])
    setQuizname(res.data['title']);
    console.log(questions);
    console.log(answers);
    console.log(options);
    navigate("/Createdquiz");})
  }
  
  // const getsome = ()=>{
  //   axios.get('http://127.0.0.1:8000/getq').then(res=>setQuestions(res.data),
  //   console.log(questions)  
  //   )
  // }
 
  return (
    <div className="App">
      <div className='nav'>  
        <nav>
          <ul>
            <Link to="/">
            <h1>Quizzer</h1>
            </Link>
          </ul>
          <div></div>
        </nav>
      </div>
      <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path="Questions" element={<Questions setQuizname={setQuizname} getsom={getsom} qno={qno} setqno={setqno} dosome={dosome} setQue={setQue} setOpt={setOpt} setAns={setAns} Que={Que} Opt={Opt} Ans={Ans}/>} />
      <Route path='Ques' element={<QuesTile  qno={qno} setQue={setQue} setOpt={setOpt} setAns={setAns} Que={Que} Opt={Opt} Ans={Ans}/>}/>
      <Route path='Quiz'  element={<Quiz setPyQuestions={setPyQuestions} setPyOptions={setPyOptions} setCorrectAnswers={setCorrectAnswers}
                                    setFlQuestions={setFlQuestions} setFlOptions={setFlOptions} setFlCorrectAnswers={setFlCorrectAnswers}
                                    setJsQuestions={setJsQuestions} setJsOptions={setJsOptions} setJsCorrectAnswers={setJsCorrectAnswers}/>} />
      <Route path='Pyquiz'  element={<Pyquiz Pyquestions={Pyquestions} Pyoptions={Pyoptions} correctAnswers={correctAnswers} setPyQuestions={setPyQuestions} setPyOptions={setPyOptions} setCorrectAnswers={setCorrectAnswers}/>} />
      <Route path='Jsquiz'  element={<Jsquiz setJsQuestions={setJsQuestions} setJsOptions={setJsOptions} setJsCorrectAnswers={setJsCorrectAnswers}
                                      Jsquestions={Jsquestions} Jsoptions={Jsoptions} JscorrectAnswers={JscorrectAnswers}/>} />
      <Route path='Flutterquiz'  element={<Flutterquiz setFlQuestions={setFlQuestions} setFlOptions={setFlOptions} setFlCorrectAnswers={setFlCorrectAnswers}
                                            FlcorrectAnswers={FlcorrectAnswers} Flquestions={Flquestions} Floptions={Floptions}/>} />
      <Route path='Createdquiz'  element={<Createdquiz setQuizname={setQuizname} getsom={getsom} Quizname={Quizname}questions={questions} options={options} answers={answers} 
                                            setAnswers={setAnswers} setQuestions={setQuestions} setOptions={setOptions}/>} />
      <Route path='Playquiz'  element={<Playquiz getsom={getsom}/>} />
      </Routes>
   
      
    </div>
  );
}

export default App;
