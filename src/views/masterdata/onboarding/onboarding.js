import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Onboardinglist from "../onboarding/onboardinglist";
import PropTypes from "prop-types";
import { fetchonboarding } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class Interests extends Component {

    componentDidMount() {
        this.props.fetchonboarding();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <Onboardinglist onboarding={this.props.onboarding} />
            </Fragment>
        );
    }
}
Interests.propTypes = {
    onboarding: PropTypes.object.isRequired,
    fetchonboarding: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    onboarding: state.masterdata.onboarding
});

// export default Users;
export default connect(
    mapStateToProps, { fetchonboarding }
)(Interests);