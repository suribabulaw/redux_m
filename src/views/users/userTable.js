import React from 'react';
import EditUser from './EditUser';
export default class UserTable extends React.Component {
    render() {
        const deleteUser = this.props.deleteUser;
        // console.log(this.props, 'hey hai this is')
        //  console.log(this.props, 'this is from userTabel')
        return (

            <tr key={this.props.user._id}>
                <td>
                    1
                </td>
                <td>
                    {this.props.user.username}
                </td>
                <td>
                    {this.props.user.emailid}
                </td>
                <td>
                    {this.props.user.rolename}
                </td>
                <td>
                    {<EditUser UserBody={this.props.user} />}
                </td>
                <td>
                    <button onClick={() => deleteUser(this.props.user._id)} className="btn btn-danger">Delete</button>
                </td>

            </tr>
        );
    }
}
