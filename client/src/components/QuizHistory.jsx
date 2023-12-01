import { useState, useEffect } from "react";
import axios from "axios";

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    axios.get("/quiz-history").then(({data}) => {
        setQuizHistory(data);
    });
  }, []);

  // useEffect(() => {
  //   const fetchQuizHistory = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/quiz-history", {
  //         method: "GET",
  //         credentials: "include",
  //       });
  //       const data = await response.json();
  //       if (data.success) {
  //         setQuizHistory(data.quizHistory);
  //       } else {
  //         console.error("Failed to fetch quiz history.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching quiz history:", error);
  //     }
  //   };

  //   fetchQuizHistory();
  // }, []);

  return (
    <div className="quizhistorycontainer">
      <h1 className="quizheading">Quiz History</h1>
      {quizHistory.length === 0 ? (
        <p className="pb-3">You&apos;re on a journey of self-improvement! Keep going and remember that every step forward is a step closer to your goals.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Total Score</th>
              <th>Anxiety Level Prediction</th>
            </tr>
          </thead>
          <tbody>
            {quizHistory.map((quiz, index) => (
              <tr key={index}>
                <td>{quiz.totalScore}</td>
                <td>{quiz.anxietyLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuizHistory;
