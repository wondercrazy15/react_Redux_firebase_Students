import authReucer from './authReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReucer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

})
export default rootReducer