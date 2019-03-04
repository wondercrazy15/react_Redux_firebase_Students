import React, { Component } from 'react'
import { createUser } from '../../store/actions/userActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class CreateUser extends Component {
    state = {
        Name: '',
        Age: '',
        Salary: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state)
        this.props.history.push("/")

    }
    render() {


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Student</h5>
                    <div className="input-field">
                        <label htmlFor="Name">Name</label>
                        <input type="text" id="Name" autoComplete="off" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="Age">Age</label>
                        <input type="text" id="Age" autoComplete="off" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Salary">Salary</label>
                        <input type="text" id="Salary" autoComplete="off" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
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
        createUser: (user) => dispatch(createUser(user))
    }


}


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
