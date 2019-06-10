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
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }
  submitResponse(event) {
    // this function should fire when the user fills the response and hits 'enter'
      // Is the user response correct? 
      // yes/no? What should happen?
  }

  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        {/* What is 'Reactor 2'? */}
        {/* Gameboard */}
        {/* Scoreboard */}
        {/* Response */}
      </div>
    );
  }
}
