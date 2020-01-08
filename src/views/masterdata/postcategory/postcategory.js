import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PostCategorylist from "../postcategory/postcategorylist";
import PropTypes from "prop-types";
import { fetchpostcategory } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class PostCategory extends Component {

    componentDidMount() {
        this.props.fetchpostcategory();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <PostCategorylist postcategory={this.props.postcategory} />
            </Fragment>
        );
    }
}
PostCategory.propTypes = {
    postcategory: PropTypes.object.isRequired,
    fetchpostcategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    postcategory: state.masterdata.postcategory
});

// export default Users;
export default connect(
    mapStateToProps, { fetchpostcategory }
)(PostCategory);