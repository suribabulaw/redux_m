import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ModerationList from "../moderation/moderationlist";
import PropTypes from "prop-types";
import { fetchmoderations, approveFeed } from '../../redux/actions/moderation/moderationActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class Moderations extends Component {

    componentDidMount() {
        this.props.fetchmoderations();
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>

                {/* <div>
                    {<AddModeration />}
                </div> */}
                <ModerationList moderations={this.props.moderations} approveFeed={approveFeed} />
            </Fragment>
        );
    }
}
Moderations.propTypes = {
    moderations: PropTypes.object.isRequired,
    fetchmoderations: PropTypes.func.isRequired,
    approveFeed: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    moderations: state.moderationsdata.moderations
});

// export default Users;
export default connect(
    mapStateToProps, { fetchmoderations, approveFeed }
)(Moderations);