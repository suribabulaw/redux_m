import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import UserTable from './userTable';
// Styling

class UsersList extends PureComponent {
    render() {
        const usersdata = this.props.users.users;
        const deleteUser = this.props.deleteUser;
      //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no users.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>List of Users</CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersdata.map(user => <UserTable user={user} key={user._id} deleteUser={deleteUser} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.users) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
UsersList.propTypes = {
    users: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
}
export default UsersList;


