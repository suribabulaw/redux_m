import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import DisplayLanguageTable from './displaylanguageTable';
// Styling

class DisplayLanguagesList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const displaylanguages = this.props.displaylanguages.displaylanguages;
        // const approveFeed = this.props.approveFeed;
        //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Display Languages.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Display Languagges List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th> Id</th>
                                <th> Language Name</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displaylanguages.map((masterdata, index) => <DisplayLanguageTable index={index} displaylanguages={masterdata} key={masterdata.language_id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.displaylanguages) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
DisplayLanguagesList.propTypes = {
    displaylanguages: PropTypes.object.isRequired
}
export default DisplayLanguagesList;


