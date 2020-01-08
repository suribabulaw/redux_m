import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CustomiseFeedList from "../customisefeed/customisefeedlist";
import PropTypes from "prop-types";
import { fetchcustomisefeed } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class CustomiseFeed extends Component {

    componentDidMount() {
        this.props.fetchcustomisefeed();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <CustomiseFeedList customisefeed={this.props.customisefeed} />
            </Fragment>
        );
    }
}
CustomiseFeed.propTypes = {
    customisefeed: PropTypes.object.isRequired,
    fetchcustomisefeed: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    customisefeed: state.masterdata.customisefeed
});

// export default Users;
export default connect(
    mapStateToProps, { fetchcustomisefeed }
)(CustomiseFeed);