import React from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { approveFeed } from '../../redux/actions/moderation/moderationActions'
class ApproveFeed extends React.Component {
    constructor(props) {
        //        console.log(props, 'this is from approvefeeds')
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeEmailName = this.onChangeEmailName.bind(this);
        this.onChangeRoleName = this.onChangeRoleName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.update = this.update.bind(this);

        this.state = {
            feedid: this.props.feedBody.feed_id,
            comments: '',
        }
    }
    onChangePersonName(e) {
        this.setState({
            comments: e.target.value
        });
    }
    onChangeEmailName(e) {
        this.setState({
            emailid: e.target.value
        })
    }

    onChangeRoleName(e) {

        this.setState({
            rolename: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const { comments, feedid, moderatorid = 1 } = this.state;
        console.log(this.state)
        this.props.approveFeed({ comments, feedid, moderatorid })
        this.toggle()
        // const obj = {
        //     username: this.state.username,
        //     emailid: this.state.emailid,
        //     _id: this.state._id
        // };


        this.setState({
            comments: '',
            feedid: '',
            moderatorid: ''
        })
    }
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        //    const image = 'https://neighborhood-dev-staticdata.s3.ap-south-1.amazonaws.com/106/UGC/img_xyz.jpg';

        //  const approveFeed = this.props.approveFeed;
        return (
            <div className="text-center">
                <Button color="danger" onClick={this.toggle}>
                    View
          </Button>
                <Modal
                    size='xl'
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader style={{ textAlign: "center" }} toggle={this.toggle}>View Feed Data</ModalHeader>
                    <ModalBody>
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
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <div style={{ display: "none" }}>
                                    <label>feed_id:  </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.feedid}
                                        readOnly
                                    />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <label>Comments:  </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.comments}
                                        onChange={this.onChangePersonName}
                                        required
                                        placeholder="Please enter your comments"
                                    />
                                </div>
                                <div style={{ position: "absolute", right: "30px", bottom: "10px" }}>
                                    <input type="submit" onSubmit={this.onSubmit} value="Approve Feed" className="btn btn-primary" />
                                </div>
                            </form>

                        </div>


                    </ModalBody>

                </Modal>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    roles: state.roledata.roles
});

export default connect(mapStateToProps, { approveFeed })(ApproveFeed)