import React, { useEffect, useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Response  from './Response.jsx';
import Scoreboard from './Scoreboard';
import Button from './Button';


const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  function selectQuestion(question) {
    setCurrentQuestion(question);
  }
  function checkAnswer(question, answer) {
    if (currentQuestion.answer.includes(answer) || currentQuestion.answer.includes(answer.toLowerCase())) {
      setAnsweredQuestions(answeredQuestions => [...answeredQuestions, currentQuestion.id]);
      setScore(score + currentQuestion.value)
      setCurrentQuestion({});
    } else {
      alert("Wrong!");
    }
  }

  function generate() {
    let offset = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
    fetch('http://jservice.io/api/categories?count=5&offset='+offset)
      .then(results => results.json())
      .then(categories => categories.map(category => fetch(`http://jservice.io/api/category?id=${category.id}`)))
      .then(clueRequests => Promise.all(clueRequests))
      .then(promises => Promise.all(promises.map(promise => promise.json())))
      .then(parsedClues => setCategories(parsedClues))
      .catch(console.error)
  }
  function showAnswer() {
    alert(currentQuestion.answer);
  }
  return (
    <div id={"app"}>
      <div id="title">
        Jeopardy!
      </div>
      <Button
      generate = {generate}
      currentQuestion = {currentQuestion}
      showAnswer = {showAnswer}
      />
      <Gameboard 
      categories = {categories}
      selectQuestion = {selectQuestion}
      currentQuestion = {currentQuestion}
      answeredQuestions = {answeredQuestions}
      />
      <Scoreboard 
      score = {score}
      />
      {currentQuestion.question ? <Response
      checkAnswer = {checkAnswer}
      currentQuestion = {currentQuestion}
      /> : null}

    </div>
  );
};

export default App;
