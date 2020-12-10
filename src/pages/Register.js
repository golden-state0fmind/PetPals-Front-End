import React, { Component } from 'react'
import UserModel from '../models/user'
import '../css/register.css'

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
            <div className="r-body">
                <h4 className="r-heading">Register</h4>
                <form className="r-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="r-label" htmlFor="firstName">First Name</label><br />
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label className="r-label" htmlFor="lastName">Last Name</label>
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label className="r-label" htmlFor="birthdate">Birthdate</label>
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={this.state.birthdate}
                        />
                    </div>
                    <div className="form-group">
                        <label className="r-label" htmlFor="name">Email</label>
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label className="r-label" htmlFor="name">Password</label>
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <label className="r-label" htmlFor="password2">Confirm Password</label>
                        <input className="r-input"
                            onChange={this.handleChange}
                            type="password"
                            id="password2"
                            name="password2"
                            value={this.state.password2} />
                    </div>
                    <button className="r-button" type="submit">Register</button>
                </form>
            </div>
        );
    }
}
export default Register;