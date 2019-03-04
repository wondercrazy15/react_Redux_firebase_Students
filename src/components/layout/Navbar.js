import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLink from './SignedinLinks'
import SignedOutLink from './SignedOutLinks'
const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
    const InitialLink = auth.uid ? "/" : "/SignIn"
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to={InitialLink} className="brand-logo">Students</Link>
                {links}
                {/* <SignedInLink/> */}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)