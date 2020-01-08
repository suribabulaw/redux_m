import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import DisplayLanguageTable from './interestsTable';
// Styling

class InterestsList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const interests = this.props.interests.interests;
        // const approveFeed = this.props.approveFeed;
        //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Display Languages.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Interests List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th> Interests Id</th>
                                <th> Interests Name</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interests.map((masterdata, index) => <DisplayLanguageTable index={index} interests={masterdata} key={masterdata.id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.interests) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
InterestsList.propTypes = {
    interests: PropTypes.object.isRequired
}
export default InterestsList;


