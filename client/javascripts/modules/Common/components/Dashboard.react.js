import React, { Component } from 'react';
import QuestionList from '../../Question/components/QuestionList.react';
import { Link } from 'react-router';
import { requestQuestions, setCondition } from '../../Question/actions/QuestionActions';
import { changePage } from '../../Question/actions/PaginationActions';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch(changePage(1));
    this.props.dispatch(setCondition({}));
    this.props.dispatch(requestQuestions({}));
  }

  render () {
    return (
      <div className='ui stackable grid'>
        <div className='three wide column'></div>
        <div className='ten wide column'>
          <h1>Dashboard</h1>
          <p>This page show <strong>ALL</strong> questions, or you can go to your&nbsp;
            <Link to='/home'>homepage</Link> to deal with your own questions.
          </p>
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);