import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {/* display all the categories */}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array,
}

export default Categories;
