import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Categorytypeslist from "../categorytypes/categorytypelist";
import PropTypes from "prop-types";
import { fetchcategorytypes } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class CustomiseFeed extends Component {

    componentDidMount() {
        this.props.fetchcategorytypes();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <Categorytypeslist categorytypes={this.props.categorytypes} />
            </Fragment>
        );
    }
}
CustomiseFeed.propTypes = {
    categorytypes: PropTypes.object.isRequired,
    fetchcategorytypes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categorytypes: state.masterdata.categorytypes
});

// export default Users;
export default connect(
    mapStateToProps, { fetchcategorytypes }
)(CustomiseFeed);