import React from 'react';
export default class BuyCategoryTable extends React.Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        //   const approveFeed = this.props.approveFeed;
        //   console.log(this.props)
        // console.log(this.props, 'hey hai this is')
        //  console.log(this.props, 'this is from userTabel')
        return (

            <tr key={this.props.buycategory.category_id} style={divStyle}>
                <td>
                    {this.props.index + 1}
                </td>
                <td>
                    {this.props.buycategory.category_id}
                </td>
                <td>
                    {this.props.buycategory.category_name}
                </td>
                <td>
                    <button className="btn btn-danger">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>


            </tr>
        );
    }
}
