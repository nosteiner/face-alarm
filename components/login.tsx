import React, { Component } from 'react';
import './login.css'

type LoginProps = {
  appName: string
}

type LoginState = {
	loginForm: {
		email: string
		password: string
	}
}
export class Login extends React.Component<LoginProps, LoginState> {
	constructor(props) {
		super(props)
		this.state = {
			loginForm: {
				email: '',
				password: ''
			}
		}
	}

	handleChange = (event) => {
		this.setState({loginForm:{...this.state.loginForm, [event.target.name]: event.target.value}});
	}
	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
	}

	render = () => {
		const { appName } = this.props
		return (
			<div className="login-form">
				<h1>Login to {appName}</h1>
				<form action="submit" onSubmit={this.handleSubmit}>
					<label htmlFor="email">
						Email
						<input type='email' name="email" id="email" onChange={this.handleChange} />
					</label>
					<label htmlFor="password">
						Password
						<input type='password' name="password" id="password" onChange={this.handleChange} />
					</label>
					<button type='submit'>submit</button>
				</form>
			</div>
		)
	}
}
