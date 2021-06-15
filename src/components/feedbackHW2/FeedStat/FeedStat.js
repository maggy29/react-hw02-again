import React from 'react';

function FeedStat ({bad, neutral, good, total, positivePercentage}) {
    return(
        <div>
                <p><span>Bad: </span>{bad}</p>
                <p><span>Neutral: </span>{neutral}</p>
                <p><span>Good: </span>{good}</p>
                <p><span>Total: </span>{total}</p>
                <p><span>Positive feedback: </span>{total > 0 ? positivePercentage : 0}%</p>
        </div>
    )
}

export default FeedStat;