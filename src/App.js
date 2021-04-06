import React, { Component } from 'react';

import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticsPlus = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Feedback options={['good', 'neutral', 'bad']} statisticsPlus={this.statisticsPlus} />

        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}

        {this.countTotalFeedback() === 0 && <Notification message="No feedback given" />}
      </>
    );
  }
}

// message={'No feedback given'}
export default App;
