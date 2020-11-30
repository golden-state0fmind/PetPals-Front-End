import React, { Component } from 'react'
import UserModel from '../models/user'
import '../css/login.css'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
            .then(data => {
                console.log(data)
                // TODO: FIX IT
                if (!data.user) {
                    return false
                }
                //stored user is defined in the app component and passed to login
                console.log(data)
                this.props.storeUser(data.user)
                //redirect the user to their profile
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="l-body">
                <h4 className="l-heading">Login</h4>
                <div className="form-wrapper">
                    <form className="l-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="l-label" htmlFor="name">Email</label>
                            <input
                                className="l-input"
                                onChange={this.handleChange}
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label className="l-label" htmlFor="password">Password</label>
                            <input
                                className="l-input"
                                onChange={this.handleChange}
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password} />
                        </div>
                        <button className="l-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;