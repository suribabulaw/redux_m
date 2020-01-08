import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserList from "../users/userlist";
import PropTypes from "prop-types";
import { fetchusers, deleteUser } from '../../redux/actions/users/userActions'
import AddUser from '../users/addUser';

// Styling
class Users extends Component {

    componentDidMount() {
        this.props.fetchusers();
    }
    render() {
        //   console.log(this.props)
        const deleteUser = this.props.deleteUser;
        return (
            <Fragment>

                <div>
                    {<AddUser />}
                </div>
                <UserList users={this.props.users} deleteUser={deleteUser} />
            </Fragment>
        );
    }
}
Users.propTypes = {
    users: PropTypes.object.isRequired,
    fetchusers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users: state.userdata.users
});

// export default Users;
export default connect(
    mapStateToProps, { fetchusers, deleteUser }
)(Users);
