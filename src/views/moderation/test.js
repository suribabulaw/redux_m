import React, { Component } from 'react';
import { connect } from "react-redux";
import { approveFeed } from '../../redux/actions/moderation/moderationActions'

class test extends Component {
    state = {
        feedid: this.props.feedBody.feed_id,
        comments: '',
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                            <span>
                                <b>Feed Id:</b> {this.props.feedBody.feed_id}
                            </span>
                            <span style={{ marginLeft: "15px" }}> <b>Feed Category:</b>{this.props.feedBody.feed_category}</span>
                            <span style={{ marginLeft: "15px" }}> <b>Feed Subcategory:</b>{this.props.feedBody.feed_subcategory}</span>
                            <span style={{ marginLeft: "15px" }}> <b>Feed_type:</b>{this.props.feedBody.feed_type}</span>
                            <div style={{ marginTop: "15px" }}>
                                <span style={{ marginLeft: "15px" }}> <b>Feed Language:</b>{this.props.feedBody.feed_language ? this.props.feedBody.feed_location : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Feed Interest:</b>{this.props.feedBody.feed_interest.length ? this.props.feedBody.feed_location : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Feed location:</b>{this.props.feedBody.feed_location ? this.props.feedBody.feed_location : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Feed Title:</b>{this.props.feedBody.feed_title}</span>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <span style={{ marginLeft: "15px" }}> <b>Feed Description:</b>{this.props.feedBody.content_description ? this.props.feedBody.content_description : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Feed CreatedOn:</b>{this.props.feedBody.created_on ? new Date(this.props.feedBody.created_on).toLocaleString() : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Posted User :</b>{this.props.feedBody.user_firstName + " " + this.props.feedBody.user_lastName}</span>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <h5>Feed Image</h5>
                                {this.props.feedBody.image_url
                                    .map((item, i) => (
                                        <img style={{ marginLeft: "10px" }} key={i} src={item} width="190" alt="Card cap 14" className="" />

                                    ))}
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <span style={{ marginLeft: "15px" }}> <b>Reported on:</b>{this.props.feedBody.reported_date ? new Date(this.props.feedBody.reported_date).toLocaleString() : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Reported By:</b>{this.props.feedBody.reported_by ? this.props.feedBody.reported_by : 'No Data'}</span>
                                <span style={{ marginLeft: "15px" }}> <b>Reporter Comments:</b>{this.props.feedBody.abuse_comment ? this.props.feedBody.abuse_comment : 'No Data'}</span>
                            </div>
                        </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => ({
    roles: state.roledata.roles
});


export default  connect(mapStateToProps ,{ approveFeed }) (test);