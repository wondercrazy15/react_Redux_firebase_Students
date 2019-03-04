import React, { Component } from 'react'
import { UserList } from './Userlist';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Notifications } from './Notification'
class Dashboard extends Component {
  render() {
    debugger
    let { students, auth,notifications } = this.props;
    console.log("students are", students);

    if (auth.uid == undefined) return <Redirect to="/SignIn" />
    if (students) {
      students = students.filter(x => x.authorId == auth.uid);
    }
    return (
      <div className="dashboard Container">
        <div className="row">
          <div className="col s12 m12">
            <UserList students={students} />
          </div>
        </div>
        <div class="row">
          <Notifications notifications={notifications} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  debugger
  console.log(state)


  debugger
  return {
    students: state.firestore.ordered.students,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }


}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'students' },
    { collection : 'notifications',limit:10}
  ])
)(Dashboard)
