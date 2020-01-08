import React from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { fetchRoles } from '../../redux/actions/roles/rolesActions';
import { updateUser } from '../../redux/actions/users/userActions'
class EditUser extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeEmailName = this.onChangeEmailName.bind(this);
        this.onChangeRoleName = this.onChangeRoleName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.update = this.update.bind(this);

        this.state = {
            username: this.props.UserBody.username,
            emailid: this.props.UserBody.emailid,
            _id: this.props.UserBody._id,
            rolename: this.props.UserBody.rolename
        }
    }
    componentDidMount() {
        this.props.fetchRoles();
    }
    onChangePersonName(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmailName(e) {
        this.setState({
            emailid: e.target.value
        })
    }
    onChangeRoleName(e) {

        this.setState({
            rolename: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        e.preventDefault();
        const { username, emailid, rolename, _id } = this.state;
        this.props.updateUser({ username, emailid, rolename, _id })
        this.toggle()
        // const obj = {
        //     username: this.state.username,
        //     emailid: this.state.emailid,
        //     _id: this.state._id
        // };


        // this.setState({
        //     username: '',
        //     emailid: '',
        //     rolename: ''
        // })
    }
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        let roles = this.props.roles.roles;
        let roleOptions = roles.map((role) =>
            <option value={role.rolename} selected={this.state.rolename === role.rolename ? 'selected' : null} key={role.rolename}>{role.rolename}</option>
        );
        return (
            <div className="text-center">
                <Button color="danger" onClick={this.toggle}>
                    Edit User
          </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
                    <ModalBody>
                        <div style={{ marginTop: 10 }}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>User Name:  </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangePersonName}
                                    />
                                </div>
                                <div className="form-group" style={{ display: 'none' }}>
                                    <label>Id:  </label>
                                    <input
                                        readOnly
                                        type="text"
                                        className="form-control"
                                        value={this.state._id}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>User emailid: </label>
                                    <input type="text"
                                        className="form-control"
                                        value={this.state.emailid}
                                        onChange={this.onChangeEmailName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>User Role : </label>
                                    <select className="form-control" onChange={this.onChangeRoleName} required >
                                        <option value="">Select Role</option>
                                        {roleOptions}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="submit" onClick={this.onSubmit} value="Update User" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </ModalBody>

                </Modal>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    roles: state.roledata.roles
});

export default connect(mapStateToProps, { updateUser, fetchRoles })(EditUser)