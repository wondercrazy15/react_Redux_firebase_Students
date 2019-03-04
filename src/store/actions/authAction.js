export const signUp = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        debugger
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            debugger
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                initials: credentials.firstName[0] + credentials.lastName[0]
            })
            dispatch({ type: "SIGNUP_SUCCESS", res })
        }).catch((err) => {
            debugger
            dispatch({ type: "SIGNUP_ERROR", err })
        });
    }
}
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        debugger
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            dispatch({ type: "LOGIN_SUCCESS", res })
        }).catch((err) => {
            dispatch({ type: "LOGIN_ERROR", err })
        });
    }
}
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        debugger
        firebase.auth().signOut()
            .then((res) => {
                dispatch({ type: "LOGOUT_SUCCESS", res })
            }).catch((err) => {
                dispatch({ type: "LOGOUT_ERROR", err })
            });
    }
}