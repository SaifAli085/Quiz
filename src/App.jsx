import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question';
import { Timer } from './components/Timer';
import { useMemo } from 'react';
import Start from './components/Start';

function App() {
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "According To QAir Which Capital City Became The World's Most Polluted Major City In August 2023?",
      answers: [
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: false,
        },
        {
          text: "Mexico City",
          correct: false,
        },
        {
          text: "Jakarta",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Where Was The India Startup Festival 2023 Held?",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Hyderabad",
          correct: false,
        },
        {
          text: "Bangalore",
          correct: true,
        },
        {
          text: "Chennai",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What Is The Rank Of India In The Internet Resilience Index?",
      answers: [
        {
          text: "First",
          correct: false,
        },
        {
          text: "Second",
          correct: false,
        },
        {
          text: "Fifth",
          correct: false,
        },
        {
          text: "Sixth",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "In The World Athletics Championship, Who Will Lead The Indian Team?",
      answers: [
        {
          text: "Neeraj Chopra",
          correct: true,
        },
        {
          text: "Hima Das",
          correct: false,
        },
        {
          text: "P. V. Sindhu",
          correct: false,
        },
        {
          text: "Bajrang Punia",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which Mountain Peak Is Known As The 'Everest Of Maharashtra'?",
      answers: [
        {
          text: " Salher",
          correct: false,
        },
        {
          text: "Dhodap",
          correct: false,
        },
        {
          text: "Taramati",
          correct: false,
        },
        {
          text: "Kalsubai",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which Of These Food Items Is Not Shaped In The Same Way As The Other Three?",
      answers: [
        {
          text: "Chakli",
          correct: false,
        },
        {
          text: "Murukku",
          correct: false,
        },
        {
          text: "Gujiya",
          correct: true,
        },
        {
          text: "Jalebi",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which Of These Planets Does Not Have Rings?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
        {
          text: "Venus",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which Is Currently The Northernmost State Of India?",
      answers: [
        {
          text: "Himachal Pradesh",
          correct: true,
        },
        {
          text: "Uttarakhand",
          correct: false,
        },
        {
          text: "Punjab",
          correct: false,
        },
        {
          text: "Jammu And Kashmir",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Rishi Kapoor Made His First Screen Appearance In Which Of These Movies?",
      answers: [
        {
          text: "Boot Polish",
          correct: false,
        },
        {
          text: "Shree 420",
          correct: true,
        },
        {
          text: "Awara",
          correct: false,
        },
        {
          text: "Mera Naam Joker",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which Of These Products Used In Hindu Rituals Is Famous For Their Fragrance?",
      answers: [
        {
          text: "Akshat",
          correct: false,
        },
        {
          text: "Roli",
          correct: false,
        },
        {
          text: "Kumkum",
          correct: false,
        },
        {
          text: "Chandan",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which Of These Is A Domain Name Used By Official Indian Government Websites?",
      answers: [
        {
          text: "Gov.In",
          correct: true,
        },
        {
          text: "Gov.Com",
          correct: false,
        },
        {
          text: "Ind.In",
          correct: false,
        },
        {
          text: "Ind.Com",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which Of These Places Was Earlier Known As Cape Comorin?",
      answers: [
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Ooty",
          correct: false,
        },
        {
          text: "Bengaluru",
          correct: false,
        },
        {
          text: "Kanyakumari",
          correct: true,
        },
      ],
    },
    {
      id: 16,
      question: "Who Is The CEO Of The Serum Institute Of India?",
      answers: [
        {
          text: "Adar Poonawalla",
          correct: true,
        },
        {
          text: "Dr Krishna Ella",
          correct: false,
        },
        {
          text: "Dr K Anand Kumar",
          correct: false,
        },
        {
          text: "Pankaj Patel",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Complete This Hindi Proverb: 'Aasteen Ka _________'",
      answers: [
        {
          text: "Keeda",
          correct: false,
        },
        {
          text: "Kanta",
          correct: false,
        },
        {
          text: "Saanp",
          correct: true,
        },
        {
          text: "Kaudi",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "Which Of These Sports Is Played On A Rectangular Court?",
      answers: [
        {
          text: "Cricket",
          correct: false,
        },
        {
          text: "Baseball",
          correct: false,
        },
        {
          text: "Golf",
          correct: false,
        },
        {
          text: "Badminton",
          correct: true,
        },
      ],
    },
    {
      id: 19,
      question: "Which Of These Is Not A Chemical Element?",
      answers: [
        {
          text: "Argon",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Salt",
          correct: true,
        },
        {
          text: "Mercury",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Which Of These Countries Shares Its Border With India But Not With China?",
      answers: [
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "Bangladesh",
          correct: false,
        },
        {
          text: "Myanmar",
          correct: false,
        },
        {
          text: "Bhutan",
          correct: false,
        },
      ],
    },
    
  ];
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState('0')
  const [username, setUsername] = useState(null)
  const moneyList = useMemo(()=>
    [
      { id: 1, amount: '5000'},
      { id: 2, amount: '10000'},
      { id: 3, amount: '20000'},
      { id: 4, amount: '30000'},
      { id: 5, amount: '40000'},
      { id: 6, amount: '50000'},
      { id: 7, amount: '100000'},
      { id: 8, amount: '200000'},
      { id: 9, amount: '300000'},
      { id: 10, amount: '400000'},
      { id: 11, amount: '800000'},
      { id: 12, amount: '1200000'},
      { id: 13, amount: '1600000'},
      { id: 14, amount: '2400000'},
      { id: 15, amount: '3200000'},
      { id: 16, amount: '6400000'},
      { id: 17, amount: '12500000'},
      { id: 18, amount: '25000000'},
      { id: 19, amount: '50000000'},
      { id: 20, amount: '70000000'},
    ],
  [])
  useEffect(()=>{
    questionNumber >1 && setEarned(moneyList.find((m)=> m.id === questionNumber - 1).amount)
  },[moneyList, questionNumber])
  return (
    <div className="App">
     {!username? (<Start setUsername={setUsername}/>): <>
     <div className="main">
        {timeOut?(<h1 className='earnText'>You earned: &#8377; {earned}</h1>): (<>
          <div className="top">

          <div className="timer"><Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom"><Question data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/></div></>)}
        
      </div>
      <div className="money">
        <ul className="moneyList">
          {moneyList.map((m,i)=>{
            return(
              <li key={i} className={questionNumber === m.id ? 'listItem active' : 'listItem'}>&#8377; {m.amount}</li>

            )

          })}
          
        </ul>
      </div>
     </>}
      
    </div>
  );
}

export default App;
