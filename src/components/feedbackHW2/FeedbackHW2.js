import React, {Component} from 'react';
import FeedStat from './FeedStat';
import FeedOptions from './FeedOptions';
import Section from './Section';


export default class Feedback extends Component {
    state = {
        bad: 0,
        neutral: 0, 
        good: 0,
    }

    handleFeedback = (e) => {
        this.setState({
            [e.target.name]: Number(e.target.value) + 1
        })
    }

    countTotal = () => {
        const {bad, neutral, good} = this.state;
        return bad + neutral + good
    }

    countPositive =() => {
        return Math.round(this.state.good / this.countTotal() *100)
    }

    render() {
        const {bad, neutral, good} = this.state;
        const total = this.countTotal();
        const positivePercentage = this.countPositive();

        return(
            <div>
                <Section 
                  title="Please leave feedback" 
                  children={<FeedOptions options={this.state} onLeaveFeedback={this.handleFeedback} />}
                />
                <Section 
                  title="Statistics"
                  children={<FeedStat good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
                />
            </div>
        )
    }
}