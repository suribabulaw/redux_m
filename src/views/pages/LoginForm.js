import React from 'react';
import TextFieldGroup from './TextFieldGroup';
import validateInput from '../../redux/actions/auth/login';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth/authActions';
import PropTypes from "prop-types";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    // onSubmit(e) {
    //     e.preventDefault();
    //     if (this.isValid()) {
    //         this.setState({ errors: {}, isLoading: true });
    //         this.props.login(this.state).then(
    //             (res) => this.context.router.history.push('/users'),
    //             (err) => 
    //         );
    //     }
    // }
    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.history.push('/users'),
                (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, emailid, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <TextFieldGroup
                    field="emailid"
                    value={emailid}
                    placeholder="Email Id"
                    error={errors.emailid}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="password"
                    value={password}
                    placeholder="Password"
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />

                <div className="form-group"><button className="btn btn-pbtn-pink btn-raised btn btn-danger btn-blockrimary btn-lg" disabled={isLoading}>Login</button></div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);