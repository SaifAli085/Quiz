import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from '../sounds/play.mp3'
import correct from '../sounds/correct.mp3'
import wrong from '../sounds/wrong.mp3'

const Question = ({data, setTimeOut, questionNumber, setQuestionNumber}) => {

  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')
  // const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  useEffect(()=>{
    setQuestion(data[questionNumber - 1])
  },[data, questionNumber])

 

  const handleClick = (a) =>{
    setSelectedAnswer(a)
    setClassName('answer active')
    setTimeout(() => {
      setClassName(a.correct?'answer correct': 'answer wrong')
    }, 3000);
    setTimeout(() => {
      if(a.correct){
        correctAnswer()
      }
      else{
        setTimeOut(true)
        wrongAnswer()

      }
    }, 5000);
    setTimeout(() => {
      if(a.correct){
        setQuestionNumber((prev)=>prev+1)
        setSelectedAnswer(null)
      }
      else{
        setTimeOut(true)
      }
    }, 6000);
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a,i)=>{
          return(
            <div key={i} className={selectedAnswer === a? className: 'answer'} onClick={()=>handleClick(a)}>{a.text}</div>
          )

        })}
        
      </div>
    </div>
  );
};

export default Question;
