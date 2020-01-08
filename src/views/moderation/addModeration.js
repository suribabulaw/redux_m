import React from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { saveUser } from '../../redux/actions/users/userActions'
import { fetchRoles } from '../../redux/actions/roles/rolesActions';
class AddModeration extends React.Component {
    constructor(props) {

        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeEmailName = this.onChangeEmailName.bind(this);
        this.onChangeRoleName = this.onChangeRoleName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.update = this.update.bind(this);
        //   console.log(this.props)
        this.state = {
            username: '',
            emailid: '',
            rolename: ''
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
        const { username, emailid, rolename } = this.state;
        this.props.saveUser({ username, emailid, rolename })
        this.toggle()
    }
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        this.setState({
            username: '',
            emailid: '',
            rolename: ''
        })
    }
    render() {
        // console.log(this.props.roles.roles)
        let roles = this.props.roles.roles;
        let roleOptions = roles.map((role) =>
            <option value={role.rolename} key={role.rolename}>{role.rolename}</option>
        );
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    Add User
          </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Add user</ModalHeader>
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

export default connect(mapStateToProps, { saveUser, fetchRoles })(AddModeration)