import React from 'react';
export default class DisplaylanguagesTable extends React.Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        };
        //   const approveFeed = this.props.approveFeed;
        //   console.log(this.props)
        // console.log(this.props, 'hey hai this is')
        //  console.log(this.props, 'this is from userTabel')
        return (

            <tr key={this.props.displaylanguages.language_id} style={divStyle}>
                <td>
                    {this.props.index + 1}
                </td>
                <td>
                    {this.props.displaylanguages.language_id}
                </td>
                <td>
                    {this.props.displaylanguages.language_name}
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
