import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { saveRule, fetchfeedrules ,deleteFeed } from '../../redux/actions/feedrules/feedrulesAction';
import { connect } from "react-redux";
import FeedCards from "../feedrules/feedcards";
import { Button, Card, CardBody, CardTitle ,Input} from "reactstrap";

// Styling
class FeedRules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            shareholders: [{ name: "", value: "" }],
            addfeedrule: [],
            errorr: ""
        }
    }
 
    componentDidMount() {
        this.props.fetchfeedrules();
    }
    addCountry() {
        this.setState({ addfeedrule: [...this.state.addfeedrule, ''] })
    };
    handleChange(e, index) {
        this.state.addfeedrule[index] = e.target.value
        this.setState({ addfeedrule: this.state.addfeedrule })
    };
    handleRemove(index) {
        this.state.addfeedrule.splice(index, 1)
        this.setState({ addfeedrule: this.state.addfeedrule })

    };
 
    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    };
    handleShareholderValueChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, value: evt.target.value };
        });
        this.setState({ shareholders: newShareholders });
    };

    handleSubmit = evt => {
        
        evt.preventDefault();
     
        const { name, shareholders,error } = this.state;
        let errorr = {};
        if(this.state.shareholders.name === '') errorr.name= 'please select property name';
        if(this.state.shareholders.value === '') errorr.name= 'please select value'
        if(!this.state.error){
            this.props.saveRule({ name, shareholders })
            this.handleRemove()
            this.setState({
                name: '',
                shareholder: [{ name: "", value: "" }]
            });
        }
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: "", value: "" }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    };
    render() {
        console.log(this.props.feedrules)

        return (
            <Fragment>
                <Button color="danger" onClick={(e) => this.addCountry(e)}>Add Rule</Button>

                {/* {this.props.feedrules ? this.props.feedrules.feedrules.map(feedrule => <FeedCards feedrule={feedrule} key={feedrule._id} deleteFeed={this.props.deleteFeed} />) : <div style={{ marginBottom: '10px' }}>'No Rules Created Yet'</div> } */}
                
                {this.state.addfeedrule.map((feedrule, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <CardBody>
                                    <CardTitle>New FeedRule</CardTitle>
                                    <form>
                                        Rule Name:  <input
                                            type="text"
                                            placeholder="Rule Name"
                                            value={this.state.name}
                                            onChange={this.handleNameChange}
                                        />

                                        <h4 style={{ marginTop: "15px" }}>Properties</h4>
                                        <Button
                                            color='primary'
                                            style={{ marginTop: "5px" }}
                                            type="button"
                                            onClick={this.handleAddShareholder}
                                            className="small"
                                        >
                                            Add New Property
                                       </Button>
                                        {this.state.shareholders.map((shareholder, idx) => (
                                            <div key={idx} style={{ marginTop: "10px" }} className="shareholder">
                        
                                        <label>
                                            Property Name: <select value={shareholder.name} style={{ margin: "25px" }} onChange={this.handleShareholderNameChange(idx)}>
                                                        <option value="Location">Location</option>
                                                        <option value="Radius">Radius </option>
                                                    </select>
                                            </label>
                                            Property Value:  <input
                                                    type="text"
                                                    placeholder={`Property #${idx + 1} value`}
                                                    value={shareholder.value}
                                                    onChange={this.handleShareholderValueChange(idx)}
                                                />
                                     <Button
                                            color='primary'
                                            style={{ margin: "25px" }}
                                            type="button"
                                            onClick={this.handleAddShareholder}
                                            className="small"
                                        >  +  </Button>
                                     <Button color='primary'
                                           style={{ margin: "25px" }}
                                            type="button"
                                            onClick={this.handleRemoveShareholder(idx)}
                                            className="small"
                                        > - </Button>
                                            </div>
                                        ))}

                                        <Button color='primary' onClick={this.handleSubmit}>Create Rule</Button>
                                    </form>

                                </CardBody>
                                <span>{this.state.errorr.name}</span>
                                <span>{this.state.errorr.value}</span>
                                <Button color='primary' style={{ float: "right" }} onClick={() => this.handleRemove(index)}>Close Tab</Button>
                            </Card>
 
                        </div>
                    )
                }

                )}
         {this.props.feedrules ? this.props.feedrules.feedrules.map(feedrule => <FeedCards feedrule={feedrule} key={feedrule._id} deleteFeed={this.props.deleteFeed} />) : <div style={{ marginBottom: '10px' }}>'No Rules Created Yet'</div> }
            </Fragment>
        );
    }



}

FeedRules.propTypes = {
    feedrules: PropTypes.object.isRequired,
    fetchfeedrules: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    feedrules: state.feedrulesdata.feedrules
});

export default connect(mapStateToProps, { saveRule, fetchfeedrules ,deleteFeed })(FeedRules);