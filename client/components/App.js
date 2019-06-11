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
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  render() {
    return (
      <div id={'app'}>
        {/* Gameboard */}
        {/* Scoreboard */}
        {/* Response */}
      </div>
    );
  }
}
