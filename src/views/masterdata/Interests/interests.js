import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Interestslist from "../Interests/interestslist";
import PropTypes from "prop-types";
import { fetchinterests } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class Interests extends Component {

    componentDidMount() {
        this.props.fetchinterests();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <Interestslist interests={this.props.interests} />
            </Fragment>
        );
    }
}
Interests.propTypes = {
    interests: PropTypes.object.isRequired,
    fetchinterests: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    interests: state.masterdata.interests
});

// export default Users;
export default connect(
    mapStateToProps, { fetchinterests }
)(Interests);