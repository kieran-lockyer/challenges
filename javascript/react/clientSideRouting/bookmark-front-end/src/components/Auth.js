import React, { Component } from 'react'
import Axios from 'axios'

const authApi = 'http://localhost:3001/auth/login'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props)
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        Axios.post(authApi, user).then(() => {
            this.setState({
                isLoggedIn: true
            })
            this.props.loggedIn()
        }).catch(err => {
            console.log('Authentication Error', err)
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
            <div>
                {isLoggedIn ? (
                    <h4>Already logged in</h4>
                ) : (
                        <div>
                            <h4 className="center">Login</h4>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" onChange={this.handleChange} />
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" onChange={this.handleChange} />
                                <button>Login</button>
                            </form>
                        </div>
                    )}
            </div>
        )
    }
}

export default Auth
