import { useState } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
// import Notification from './Components/Notification/Notification';

const App = () => {
  const [stateGood, setStateGood] = useState(0);
  const [stateNeutral, setStateNeutral] = useState(0);
  const [stateBad, setStateBad] = useState(0);

  const countTotalFeedback = (stateGood, stateNeutral, stateBad) => {
    return stateGood + stateNeutral + stateBad;
  };

  const countPositiveFeedbackPercentage = (
    stateGood,
    stateNeutral,
    stateBad,
  ) => {
    return 100 / ((stateGood + stateNeutral + stateBad) / stateGood) + '%';
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        console.log(option);
        setStateGood(stateGood + 1);
        break;

      case 'neutral':
        console.log(option);
        setStateNeutral(stateNeutral + 1);
        break;

      case 'bad':
        console.log(option);
        setStateBad(stateBad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <FeedbackOptions
        title="Please leave feedback"
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        title="Statistics"
        good={stateGood}
        neutral={stateNeutral}
        bad={stateBad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};

export default App;
