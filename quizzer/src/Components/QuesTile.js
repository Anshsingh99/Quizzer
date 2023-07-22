import React from 'react'
import '../App.css'
import { useState } from 'react'
import axios from 'axios'

const QuesTile = (props) => {
  
  // const [Que,setQue]=useState([]);
  const[quest,setQuest]=useState();

  // const[Opt,setOpt]=useState([]);
  // const[opt,setopt]=useState([]);
  // const[Ans,setAns]=useState([])
  const[anskey,setanskey]=useState("");
  const [submitted, setSubmitted] = useState(false);

  const[o1,seto1]=useState('')
  const[o2,seto2]=useState('')
  const[o3,seto3]=useState('')
  const[o4,seto4]=useState('')
  
 let i=0
  const dosome = () => {
     props.setQue([...props.Que,quest])
    //  setopt([o])
     props.setOpt([...props.Opt,[o1,o2,o3,o4]])
     props.setAns([...props.Ans,anskey])
     setSubmitted(true)
     console.log(i+1)
    }

  return (
    <div><label className="label-color">Q:</label>
        <input id='0' className='questionTile-input' placeholder='Enter question' onChange={(event )=>{
          setQuest(event.target.value)
        }
        } disabled={submitted}></input><br/>
        <label className="label-color">1:</label>
        <input id='1' onChange={(event)=>{seto1([event.target.value])}}disabled={submitted}></input><br/>
        <label className="label-color">2:</label>
        <input id='2' onChange={(event)=>{seto2([event.target.value])}}disabled={submitted}></input><br/>
        <label className="label-color">3:</label>
        <input id='3' onChange={(event)=>{seto3([event.target.value])}}disabled={submitted}></input><br/>
        <label className="label-color">4:</label>
        <input id='4' onChange={(event)=>{seto4([event.target.value])}}disabled={submitted}></input><br/>
        <label className="label-color-pad">Ans:</label>
        <input id='5'type='Number' onChange={(event )=>{setanskey(event.target.value)}} max={4} disabled={submitted}></input><br/>
        <button  onClick={dosome} className='questile-btn'>Done</button><br/>
        {/* <button onClick={getsom}>get</button> */}
        
        
    </div>
  )
}

export default QuesTile