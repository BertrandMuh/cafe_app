import React, { Component } from 'react';
import { signUp } from '../../utilities/user-functions';

export default class SignUpForm extends Component {
    // state is always an object with a property for each "piece" of state
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (event) => {
        let propertyName = event.target.name;
        this.setState({
            [propertyName]: event.target.value,
            error: ''
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting');
        let data = { ...this.state };
        delete data.confirm
        delete data.error;
        let response = await signUp(data)
        console.log(response);



    }
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}