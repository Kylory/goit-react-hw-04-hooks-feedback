import React from 'react';

const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  return (
    <ul>
      {title}
      {options.map(label => (
        <li>
          <button
            name={label}
            key={label}
            type="button"
            onClick={() => onLeaveFeedback(label)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
