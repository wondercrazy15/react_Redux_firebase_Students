import React from 'react'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authAction';
import { connect } from 'react-redux';
const SignedInLink = (props) => {
    return (
        <ul className="right">
            {/* <li><NavLink to="/SignIn">SignIn</NavLink></li> */}
            <li><a onClick={props.signOut}>SignOut</a></li>
            <li><NavLink to="/CreateUser">Add Student</NavLink></li>
            {/* <li><NavLink to="/"></NavLink></li> */}
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLink)