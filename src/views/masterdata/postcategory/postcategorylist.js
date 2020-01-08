import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import PostCategoryTable from './postcategoryTable';
// Styling

class OnboardingList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const postcategory = this.props.postcategory.postcategory;
        // const approveFeed = this.props.approveFeed;
        //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Display Languages.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Post Category List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th> Category Id</th>
                                <th> Category Title</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postcategory.map((masterdata, index) => <PostCategoryTable index={index} postcategory={masterdata} key={masterdata.category_id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.postcategory) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
OnboardingList.propTypes = {
    postcategory: PropTypes.object.isRequired
}
export default OnboardingList;


