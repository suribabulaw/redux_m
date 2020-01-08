import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import CustomiseFeedTable from './customisefeedTabel';
// Styling

class CustomioseFeedList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const customisefeed = this.props.customisefeed.customisefeed;
        // const approveFeed = this.props.approveFeed;
        console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Reported Feeds.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Cusomise Feed List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th>Category Id</th>
                                <th>Category Name</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customisefeed.map((masterdata, index) => <CustomiseFeedTable index={index} customisefeed={masterdata} key={masterdata.category_id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.customisefeed) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
CustomioseFeedList.propTypes = {
    customisefeed: PropTypes.object.isRequired
}
export default CustomioseFeedList;


