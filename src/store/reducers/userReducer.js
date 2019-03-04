const initState = {
    students: {}
    , page: 0,
    rowsPerPage: 5,
    authError: null,
    authSuccess: null
}


const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_STUDENTS_SUCCESS':
            console.log('createdStudentSuccess', action.students)
            return {
                ...state,
                authSuccess: "Successfully Created Student",
                authError: "Error in SignUp"
            };
        case 'ADD_STUDENTS_ERROR':
            console.log('createdStudentError', action.err);
            return {
                ...state,
                authSuccess: null,
                authError: "Error"
            };
        default:
            return state;
    }

    // return state;
}
export default userReducer