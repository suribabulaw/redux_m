import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DisplayLanguagelist from "../displaylanguage/displaylangugagelist";
import PropTypes from "prop-types";
import { fetchdisplaylanguages } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class CustomiseFeed extends Component {

    componentDidMount() {
        this.props.fetchdisplaylanguages();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <DisplayLanguagelist displaylanguages={this.props.displaylanguages} />
            </Fragment>
        );
    }
}
CustomiseFeed.propTypes = {
    displaylanguages: PropTypes.object.isRequired,
    fetchdisplaylanguages: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    displaylanguages: state.masterdata.displaylanguages
});

// export default Users;
export default connect(
    mapStateToProps, { fetchdisplaylanguages }
)(CustomiseFeed);