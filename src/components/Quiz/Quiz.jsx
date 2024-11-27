import React, { useRef, useState } from "react";
import './Quiz.css'; 
import { data } from "../../assets/data"; 

const Quiz = () =>{
let [index, setindex] = useState(0); 
let[question,setquestion] = useState(data[index]);  
let[lock,setlock] = useState(false);  
let [score, setscore] = useState(0); 
let [resoult , setresoult] = useState(false); 

let option1 = useRef(null); 

let option2 = useRef(null); 

let option3 = useRef(null); 

let option4 = useRef(null); 

let option_arry = [option1,option2,option3,option4]; 




    const cheanser = (e,ans) =>{ 
        if(lock === false){
        if(question.ans === ans){
          e.target.classList.add("corect"); 
          setlock(true); 
          setscore(prev=> prev+1); 
        } 
        else{
          e.target.classList.add("wrong");
          setlock(true); 
          option_arry[question.ans-1].current.classList.add("corect"); 
        }
    
      }
    } 

    const next = () => {
        if(lock === true){
            if(index == data.length-1){
                setresoult(true)
                return 0 ; 
            }

            setindex(++index); 
            setquestion(data[index]); 
            setlock(false); 
            option_arry.map((option)=>{
                option.current.classList.remove("wrong"); 
                option.current.classList.remove("corect"); 
                return null;
            })
        }  
    
          
    } 

    const reset  = ()=>{
      setindex(0); 
      setlock(false); 
      setquestion(data[0]); 
      setscore(0); 
      setresoult(false); 

    }



    return(
      <div>
       <div className="contenar">
         <h1>Quiz app</h1> 
         <hr/> 
         {resoult?<></> : <>
            <h2>{index+1}. {question.question} </h2> 
          <ul>
            <li ref={option1} onClick={(e)=>{cheanser(e,1)}}>{question.option1}</li>
            <li ref={option2} onClick={(e)=>{cheanser(e,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(e)=>{cheanser(e,3)}}>{question.option3}</li>
            <li ref={option4} onClick={(e)=>{cheanser(e,4)}}>{question.option4}</li>
          </ul> 
        <button onClick={next}>Next</button> 
        <div className="index">{index+1} of  {data.length}</div>
         </>} 
         {resoult? <> 
            <h2>Your score is {score} of {data.length}</h2>
            <button onClick={reset}>Reset</button>
         </>:<></>}
         
        
       </div>
      </div>
    )
  } 
  export default Quiz;  
 