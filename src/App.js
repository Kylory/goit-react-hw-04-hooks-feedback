import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
// import Notification from './Components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};
  static propTypes = {};

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return 100 / ((good + neutral + bad) / good) + '%';
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    return (
      <>
        <FeedbackOptions
          title="Please leave feedback"
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default App;

//Створи компонент <Section title="">, який рендерить секцію з заголовком
// і дітей(children).Оберни кожен з < Statistics > і < FeedbackOptions >
// в створений компонент секції.
