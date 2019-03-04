const initState = {
    authError: null,
    authSuccess: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: "Login Failed",
                authSuccess: null
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                authSuccess: "SuccessFully LogOut",
                authError: null
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                authSuccess: "Error in LogOut",
                authError: null
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                authSuccess: "Successfully SignUp",
                authError: null
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                authSuccess: null,
                authError: "Error in SignUp"
            }
    }
    return state;
}
export default authReducer