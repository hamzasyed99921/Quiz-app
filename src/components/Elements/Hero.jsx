import React, { useState } from "react";

const questions = [
  {
    text: "What is the capital of pakistan?",
    options: [
      { id: 0, text: "karachi", correct: false },
      { id: 1, text: "peshawar", correct: false },
      { id: 2, text: "islamabad", correct: true },
      { id: 3, text: "lahore", correct: false },
    ],
  },
  {
    text: "Who is the fastest bowler in the history of cricket?",
    options: [
      { id: 0, text: "Brat Lee", correct: false },
      { id: 1, text: "Shoaib Akhtar", correct: true },
      { id: 2, text: "Shaun Tait", correct: false },
      { id: 3, text: "Mark Wood", correct: false },
    ],
  },
  {
    text: "What is the sum of 12 and 9?",
    options: [
      { id: 0, text: "19", correct: false },
      { id: 1, text: "20", correct: false },
      { id: 2, text: "23", correct: false },
      { id: 3, text: "21", correct: true },
    ],
  },
  {
    text: "setTimeout() is by default?",
    options: [
      { id: 0, text: "asynchronous function", correct: true },
      { id: 1, text: "None of these", correct: false },
      { id: 2, text: "synchronous function", correct: false },
      { id: 3, text: "callback function", correct: false },
    ],
  },
  {
    text: "National Poet of Pakistan is: ",
    options:[
      {id:0, text: "Quaid Azam", correct: false},
      {id:1, text: "Allama Iqbal", correct: true},
      {id:2, text: "Ali", correct: false},
      {id:3, text: "babar", correct: false},
    ],
  },
];

const Hero = () => {
  const [showresult, setShowresult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);

  const clicked = (correct) => {
    if (correct === true) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setShowresult(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setShowresult(false);
    setcurrentQuestion(0);
  };

  return (
    <>
      <div className="hero_bg">
        <div className="container">
          <h3 className="text-center pt-5">Quiz App</h3>
          <h4 className="text-center py-2">Your Current Score: {score}</h4>
          <div className="d-flex justify-content-center mt-4">
            {showresult === false ? (
              <div className="card" style={{ width: "28rem" }}>
                <div className="card-body">
                  <h4 className="card-title text-center">
                    Question {currentQuestion + 1} out of {questions.length}
                  </h4>
                  <h5 className="text-center py-3">
                    {questions[currentQuestion].text}
                  </h5>
                  <ul>
                    {questions[currentQuestion].options.map((val) => {
                      return (
                        <li onClick={() => clicked(val.correct)}>{val.text}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="card" style={{ width: "25rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">Your Result</h5>
                    <h4 className="text-center py-2">
                      {score} out of {questions.length} correct - (
                      {(score / questions.length) * 100}%)
                    </h4>
                    <div className="text-center py-2">
                      <button
                        className="btn bg-primary text-white"
                        onClick={restartQuiz}
                      >
                        Reset   
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
