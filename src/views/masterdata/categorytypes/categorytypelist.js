import React, { Fragment, PureComponent } from "react";
import { isEmpty } from 'lodash';
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { Card, CardBody, CardTitle } from "reactstrap";
import CategoryTypeTable from './categorytypeTable';
// Styling

class CategoryTypesList extends PureComponent {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        const categorytypes = this.props.categorytypes.categorytypes;
        // const approveFeed = this.props.approveFeed;
        //  console.log(this.props, 'this is from list')
        const errorMessage = (
            <p>There are no Reported Feeds.</p>
        );
        const usersList = (
            <Card>
                <CardBody>
                    <CardTitle>Category Types List</CardTitle>
                    <Table>
                        <thead style={divStyle}>
                            <tr style={divStyle}>
                                <th>#</th>
                                <th>Category Id</th>
                                <th>Category Title</th>
                                <th>Category Subtitle</th>
                                <th colSpan="2" text="center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorytypes.map((masterdata, index) => <CategoryTypeTable index={index} categorytypes={masterdata} key={masterdata.category_id} />)}

                        </tbody>
                    </Table>


                </CardBody>
            </Card>
        )

        return (
            <Fragment>
                {isEmpty(this.props.categorytypes) ? errorMessage : usersList}
            </Fragment>
        );
    }
}
CategoryTypesList.propTypes = {
    categorytypes: PropTypes.object.isRequired
}
export default CategoryTypesList;


