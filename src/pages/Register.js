import React, { Component } from 'react'
import UserModel from '../models/user'

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        birthdate: '',
        email: '',
        password: '',
        password2: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        // TODO: complete this function
        event.preventDefault()
        UserModel.create(this.state)
            .then(data => {
                // clear the form
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                })
                //redirect to login
                this.props.history.push('/login')
            })
    }
    render() {
        return (
            <div>
                <h4>Register</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input
                            onChange={this.handleChange}
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={this.state.birthdate}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            id="password2"
                            name="password2"
                            value={this.state.password2} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}
export default Register;