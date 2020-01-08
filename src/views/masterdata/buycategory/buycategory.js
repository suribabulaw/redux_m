import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BuyCategoryList from "../buycategory/buycategorylist";
import PropTypes from "prop-types";
import { fetchbuycategory } from '../../../redux/actions/masterdata/masterdataActions'
// import AddModeration from '../moderation/addModeration';

// Styling
class Buycategory extends Component {

    componentDidMount() {
        this.props.fetchbuycategory();
        //  console.log(this.props)
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <BuyCategoryList buycategory={this.props.buycategory} />
            </Fragment>
        );
    }
}
Buycategory.propTypes = {
    buycategory: PropTypes.object.isRequired,
    fetchbuycategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    buycategory: state.masterdata.buycategory
});

// export default Users;
export default connect(
    mapStateToProps, { fetchbuycategory }
)(Buycategory);