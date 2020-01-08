import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import ModerationTable from './moderationTable';
// Styling

class ModerationList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const moderationsdata = this.props.moderations.moderations;
        const approveFeed = this.props.approveFeed;
        //   console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Reported Feeds.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>List of Reported Items</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr>
                                <th>#</th>
                                <th>Feedid</th>
                                <th>Feed Title</th>
                                <th>Feed Description</th>
                                <th>Feed Type</th>
                                <th>Feed Category</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moderationsdata.map((moderation, index) => <ModerationTable index={index} moderation={moderation} key={moderation.feed_id} approveFeed={approveFeed} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.moderations) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
ModerationList.propTypes = {
    moderations: PropTypes.object.isRequired
}
export default ModerationList;


