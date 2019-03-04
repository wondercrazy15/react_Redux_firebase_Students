import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)

  }
  render() {
    const { authError } = this.props;
    const { authSuccess } = this.props;
    const { users, auth } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="FirstName">FirstName</label>
            <input type="text" id="firstName" autocomplete="off" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Lastname">LastName</label>
            <input type="text" id="lastName" autocomplete="off" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" autocomplete="off" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autocomplete="off" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">Register</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : authSuccess}
            </div>
          </div>


        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    authSuccess: state.auth.authSuccess,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
