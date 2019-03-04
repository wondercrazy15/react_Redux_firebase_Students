export const createUser = (students) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        debugger
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('students').add({
            ...students,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId
        }).then(() => {
            debugger
            dispatch({ type: 'ADD_STUDENTS_SUCCESS', students });
        }).catch((err) => {
            debugger
            dispatch({ type: 'ADD_STUDENTS_ERROR', err });
        })
    }
}