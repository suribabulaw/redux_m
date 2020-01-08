import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import BuyCategoryTable from './buycategoryTable';
// Styling

class BuyCategoryList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const buycategory = this.props.buycategory.buycategory;
        // const approveFeed = this.props.approveFeed;
        //    console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Reported Feeds.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Buy Category List</CardTitle>
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
                            {buycategory.map((masterdata, index) => <BuyCategoryTable index={index} buycategory={masterdata} key={masterdata.category_id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.buycategory) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
BuyCategoryList.propTypes = {
    buycategory: PropTypes.object.isRequired
}
export default BuyCategoryList;


