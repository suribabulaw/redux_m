import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle ,Button } from "reactstrap";
// Styling
class FeedCards extends PureComponent {
    render() {
        const feedrulesdata = this.props.feedrule;
        const deleteFeed= this.props.deleteFeed
        // console.log(feedrulesdata._id , "feed id")
        // console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no feed rules.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>RuleName : {feedrulesdata.name}</CardTitle>
                    {feedrulesdata.shareholders.map(feedrule => <div>{feedrule.name} : {feedrule.value} </div>)}
                    <Button  style={{ margin:"10px"}} >Edit</Button>
                    <Button style={{ margin:"10px"}} onClick={()=>deleteFeed(feedrulesdata._id)}>Delete</Button>
                </CardBody>
            </Card>

        )
        return (
            <Fragment>
                {/* {isEmpty(this.props.feedrule) ? errorMessage : usersList} */}
                { feedrulesdata.length === '' ? errorMessage : usersList}
            </Fragment>
        );
    }
}
export default FeedCards;