import React, {Component} from 'react';

const Subscription = {
    FREE: 'free',
    PRO: 'pro',
    PREMIUM: 'premium',
};

export default class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        agreed: false,
        subscription: null,
        age: '',
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubscriptionChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleAgeChange = e => {
        const {name, value} = e.target;
        console.log(name, value)
        this.setState({[name]: value})
    }

    handleAgreedChange = e => {
        this.setState({agreed: e.target.checked})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const {email, password, agreed, subscription, age} =this.state;
        return(
            <>
            <h3>SignUp Form</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input 
                        name="email"
                        type="email" 
                        value={email} 
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                        name="password"
                        type="password" 
                        value={password} 
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Choose Your Age 
                    <select
                        name="age"
                        value={age}
                        onChange={this.handleAgeChange}
                    >
                        <option value="" disabled>...</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>
                <br />
                <div role="group">
                    <label>
                        <input 
                            type="radio" 
                            name="subscription"
                            value={Subscription.FREE}
                            checked={Subscription.FREE ===subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                        Free
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="subscription"
                            value={Subscription.PRO}
                            checked={Subscription.PRO ===subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                        Pro
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="subscription"
                            value={Subscription.PREMIUM}
                            checked={Subscription.PREMIUM ===subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                        Premium
                    </label>
                </div>
                <br />
                 <label>
                    <input 
                        type="checkbox" 
                        checked={agreed} 
                        onChange={this.handleAgreedChange}
                    />
                    I am Agreed
                </label>
                <br />
                <button type="submit" disabled={!agreed}>SignUp as {email}</button>
            </form>
            </>
        );
    }
}