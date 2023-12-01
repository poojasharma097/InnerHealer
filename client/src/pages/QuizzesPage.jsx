import { useState } from "react";
import AccountNav from "../components/AccountNav";
import { Navigate } from "react-router-dom";
import QuizHistory from "../components/QuizHistory";

const questions = [
  "How often do you feel overwhelmed by the academic demands of college life?",
  "How often do you experience physical symptoms associated with anxiety, such as rapid heartbeat, sweating, or difficulty breathing?",
  "How often do you avoid social situations due to anxiety, such as parties, group projects, or public speaking?",
  "How often do you feel like you can't handle the overall stress of college life, including academics, social pressures, and financial concerns?",
  "How often do you ruminate on your worries and problems, dwelling on negative thoughts and feelings?",
  "How often do you engage in unhealthy coping mechanisms to manage anxiety, such as substance abuse, procrastination, or avoidance?",
  "How often do you seek professional help or counseling services to address your anxiety concerns?",
  "How satisfied are you with your overall well-being, considering your physical, mental, and social health?",
  "How often do you feel like you are losing control of your life?",
  "How often do you experience feelings of loneliness and isolation due to anxiety-related social avoidance?"
];

const options = [
    { label: "Always", points: 5 },
    { label: "Frequently", points: 4 },
    { label: "Sometimes", points: 3 },
    { label: "Rarely", points: 2 },
    { label: "Never", points: 1 }
  ];

const QuizPage = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [redirect, setRedirect] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

const handleSubmit = async () => {
    if (answers.includes(0)) {
        alert("Please answer all questions before submitting.");
        return;
      }
    const totalScore = answers.reduce((acc, score) => acc + score, 0);
    // Determine anxiety level
    let anxietyLevel = "";
    if (totalScore >= 35 && totalScore <= 50) {
      anxietyLevel = "High level of anxiety";
    } else if (totalScore >= 25 && totalScore <= 34) {
      anxietyLevel = "Moderate level of anxiety";
    } else if (totalScore >= 15 && totalScore <= 24) {
      anxietyLevel = "Low level of anxiety";
    } else {
      anxietyLevel = "Very low level of anxiety";
    }
  
    try {
      const response = await fetch("http://localhost:3000/submit-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies
        body: JSON.stringify({answers: answers }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(`Your total score is ${totalScore}. ${anxietyLevel}. `);
        setRedirect(true);
      } else {
        alert("Quiz submission failed. Please try again.");
        setRedirect(true);
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Quiz submission failed. Please try again.");
    }
  };

  if (redirect) {
    return <Navigate to={'/account'} />
  }

  return (
    <div>
      <AccountNav />
      <QuizHistory /> 
      <div className="quizcontainer">
        <h1 className="quizheading">Anxiety Quiz</h1>
        <form>
          {questions.map((question, index) => (
            <div key={index} className="p-2">
              <p>{question}</p>
              <div>
                {options.map((option, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.points}
                      className=""
                      onChange={() => handleAnswerChange(index, option.points)}
                      required
                    />
                    {`${option.label}`} <br/>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="button" className="primary mt-2" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPage;
