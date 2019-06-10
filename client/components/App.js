import React, { Component } from 'react';
import axios from 'axios';
import Response from './Response';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import { categories } from '../../testdata';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: categories,
      userResponse: '',
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
    this.recordResponse = this.recordResponse.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }
  submitResponse(event) {
    if (this.state.userResponse === this.state.currentQuestion.answer){
      this.setState({score: (this.state.score += this.state.currentQuestion.value)})
    }
    else if (this.state.currentQuestion.answer) {
      this.setState({score: (this.state.score -= this.state.currentQuestion.value)})
    }
    event.target.value = '';
    this.setState(prevState => ({answeredQuestions: [...prevState.answeredQuestions, this.state.currentQuestion.id], currentQuestion: {}}), () => console.log('here'))
  }
  selectQuestion(question) {
    if (this.state.currentQuestion.id !== question.id) this.setState({ currentQuestion: question });
    else this.setState({ currentQuestion: {}, currentAnswer: '' });
  }
  componentDidMount() {
    // axios.get('http://jservice.io/api/clues')
    //   .catch(err => console.error(err))
    
    axios.get('http://jservice.io/api/categories?count=5')
    .then(categories => categories.data.map(category => category.id))
    .then(ids => ids.map(id => axios.get(`http://jservice.io/api/category?id=${id}`) ))
    .then(clueRequests => Promise.all(clueRequests))
    .then(items => items.map(item=> item.data))
    .then(data => this.setState({results: data}))
    .then(console.log)
    .catch(console.error)
    

    //What I'd like to have here is:
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        {/* What is 'Reactor 2'? */}
        <Gameboard
          categories={this.state.results}
          selectQuestion={this.selectQuestion}
          currentQuestion={this.state.currentQuestion}
          answeredQuestions={this.state.answeredQuestions}
        />
        <Scoreboard score={this.state.score} />
        <Response recordResponse={this.recordResponse} submitResponse={this.submitResponse} />
      </div>
    );
  }
}
