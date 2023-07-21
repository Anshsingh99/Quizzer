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
import { BrowserRouter, Routes, Route, Link,Navigate, useNavigate  } from "react-router-dom";
import axios from 'axios';
import Playquiz from './Components/Playquiz';


function App() {
  {document.title="Quizzer"}
  const [username,setUsername]=useState('')
  const navigate=useNavigate();
  const [qno,setqno]=useState(0)
  const [newval,setNewval]=useState()
  
  const [Que,setQue]=useState([]);
  const[Opt,setOpt]=useState([]);
  const[Ans,setAns]=useState([]);
  const[dat,setData]=useState([]);

  const[questions,setQuestions]=useState();
  const[options,setOptions]=useState();
  const[answers,setAnswers]=useState();

  const[Quizname,setQuizname]=useState('');
  const dosome = () => {
    
    axios.post("https://quizzer.if-anshansh.repl.co/post", {
        questions: Que,
        options: Opt,
        answersKey: Ans,
    }).then(res=>{console.log(res.data);
      navigate('/Playquiz')
    }
    ); 
    
  }
  const getsom = ()=>{
    axios.get('https://quizzer.if-anshansh.repl.co/get').then((res)=>{setData(res.data);
    setQuestions(res.data['questions']);
    setOptions(res.data['options']);
    setAnswers(res.data['answers']);
    console.log(questions);
    console.log(answers);
    console.log(options);
  
    navigate("/Createdquiz");})
    
    // console.log(res.data['questions']);
    // setQuestions(dat['questions']),
    // setOptions(dat['options']),
    // setAnswers(dat['answers']),
    // console.log(res.data['questions']),
    // console.log(options),
    // console.log(answers)}
   // )
  }
  
  // const getsome = ()=>{
  //   axios.get('http://127.0.0.1:8000/getq').then(res=>setQuestions(res.data),
  //   console.log(questions)  
  //   )
  // }

  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Questions/> */}
    
     
      <nav>
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
        </ul>
      </nav>
      <Routes>
      <Route path='/' index element={<Home setUsername={setUsername}/>} />
      <Route path="Questions" element={<Questions setQuizname={setQuizname} getsom={getsom} qno={qno} setqno={setqno} dosome={dosome} setQue={setQue} setOpt={setOpt} setAns={setAns} Que={Que} Opt={Opt} Ans={Ans}/>} />
      <Route path='Ques' element={<QuesTile  qno={qno} setQue={setQue} setOpt={setOpt} setAns={setAns} Que={Que} Opt={Opt} Ans={Ans}/>}/>
      <Route path='Quiz'  element={<Quiz />} />
      <Route path='Pyquiz'  element={<Pyquiz />} />
      <Route path='Jsquiz'  element={<Jsquiz />} />
      <Route path='Flutterquiz'  element={<Flutterquiz />} />
      <Route path='Createdquiz'  element={<Createdquiz  Quizname={Quizname}questions={questions} options={options} answers={answers}/>} />
      <Route path='Playquiz'  element={<Playquiz getsom={getsom}/>} />
      </Routes>
   
      
    </div>
  );
}

export default App;
