import React from 'react';

const Feedbacks = {
    BAD: "bad",
    NEUTRAL: "neutral", 
    GOOD: "good",
}

function FeedOptions ({options, onLeaveFeedback}) {
    const{bad, neutral,good} = options;
    
  return (
      <div>
          <button type="button" name={Feedbacks.BAD} value={bad} onClick={onLeaveFeedback}>Bad</button>
          <button type="button" name={Feedbacks.NEUTRAL} value={neutral} onClick={onLeaveFeedback}>Neutral</button>
          <button type="button" name={Feedbacks.GOOD} value={good} onClick={onLeaveFeedback}>Good</button>
      </div>
  )
}

export default FeedOptions;