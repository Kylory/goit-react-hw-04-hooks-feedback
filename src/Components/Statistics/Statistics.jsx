import React from 'react';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>{title}</p>
      {good || neutral || bad ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total(good, neutral, bad)}</li>
          <li>Positive feedback: {positivePercentage(good, neutral, bad)}</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;
