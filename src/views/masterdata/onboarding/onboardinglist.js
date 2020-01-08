import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import DisplayLanguageTable from './onboardingTable';
// Styling

class OnboardingList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const onboarding = this.props.onboarding.onboarding;
        // const approveFeed = this.props.approveFeed;
        //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Display Languages.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Onboarding List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th> Onboarding Id</th>
                                <th> Image</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {onboarding.map((masterdata, index) => <DisplayLanguageTable index={index} onboarding={masterdata} key={masterdata.id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.onboarding) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
OnboardingList.propTypes = {
    onboarding: PropTypes.object.isRequired
}
export default OnboardingList;


