import React from 'react';
import ApproveFeed from './approvefeed';
export default class ModerationTable extends React.Component {
    render() {
        const approveFeed = this.props.approveFeed;
        //console.log(this.props.moderation)
        // console.log(this.props, 'hey hai this is')
        //  console.log(this.props, 'this is from userTabel')
        return (

            <tr key={this.props.moderation.feed_id}>
                <td>
                    {this.props.index + 1}
                </td>
                <td>
                    {this.props.moderation.feed_id}
                </td>
                <td>
                    {this.props.moderation.feed_title}
                </td>
                <td>
                    {this.props.moderation.content_description}
                </td>
                <td>
                    {this.props.moderation.feed_type}
                </td>
                <td>
                    {this.props.moderation.feed_category}
                </td>
                <td>
                    {<ApproveFeed feedBody={this.props.moderation} approveFeed={approveFeed} />}
                </td>
                {/* <td>
                    <button onClick={() => approveFeed(this.props.moderation.feed_id)} className="btn btn-danger">Approve</button>
                </td> */}

            </tr>
        );
    }
}
