import React from 'react'
import { NavLink } from 'react-router-dom';
const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to="/SignUp">SignUp</NavLink></li>
            <li><NavLink to="/SignIn">LogIn</NavLink></li>
            {/* <li><NavLink to="/"></NavLink></li> */}
        </ul>
    )
}
export default SignedOutLink