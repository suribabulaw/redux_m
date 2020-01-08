constructor(props) {

    super(props);
    this.onChangeRulevalue = this.onChangeRulevalue.bind(this);
    // this.onChangeEmailName = this.onChangeEmailName.bind(this);
    // this.onChangeRoleName = this.onChangeRoleName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        feedrules: [],
        feedrules1: [],
        feedpropertyselected: [],
        feedproperties: [
            {
                "feedproperty": "Location",
                "values": ""
            },
            {
                "feedproperty": "Position",
                "values": ""
            }
        ],
        feedrulesobject: {
            "feedrulename": "",
            "feedproperty": "",
            "values": ""
        }
    }
    console.log(this.props.feedrules1, 'hello')
}
componentDidMount() {
    this.props.fetchfeedrules();
}


addCountry() {
    this.setState({ feedrules: [...this.state.feedrules, ''] })
};
handleChange(e, index) {
    this.state.feedrules[index] = e.target.value
    this.setState({ feedrules: this.state.feedrules })

};
handleOptionChange(e, index) {
    // this.state.feedpropertyselected = e.target.value
    this.setState({ feedpropertyselected: JSON.parse(e.target.value) })
    //  console.log(JSON.parse(e.target.value).feedproperty, 'actual value')
    this.setState({
        feedrulesobject: {
            ...this.state.feedrulesobject,
            feedproperty: JSON.parse(e.target.value).feedproperty
        }
    });

};
handleRemove(index) {
    this.state.feedrules.splice(index, 1)
    // console.log(this.state.countries)
    this.setState({ feedrules: this.state.feedrules })
};
// onChangeRulename(e) {
//     this.setState({
//         feedrulesobject: {
//             feedrulename: e.target.value
//         }
//     });
// }
onChangeRulevalue(e) {
    console.log(e)
    this.setState({
        feedrulesobject: {
            ...this.state.feedrulesobject,
            values: e.target.value
        }
    });
}
onChangeRuleName(e) {
    console.log(e)
    this.setState({
        feedrulesobject: {
            ...this.state.feedrulesobject,
            feedrulename: e.target.value
        }
    });
}
onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    const { feedrulename, feedproperty, values } = this.state.feedrulesobject;
    this.props.saveRule({ feedrulename, feedproperty, values })
    // this.toggle()
}


render() {
    console.log(this.props.feedrules1, 'this is main')
    let properties = this.state.feedproperties;
    let selectedoption = this.state.feedpropertyselected
    let propertiesOptions = properties.map((property) =>
        <option value={JSON.stringify(property)} key={property.feedproperty}>{property.feedproperty}</option>
    );
    // let displayinputs = selectedoption.map((property) =>
    //     <input value={property.values} />
    // );
    const DisplayProperties = (
        <div style={{ marginTop: "30px" }}>
            <form>
                Rule Name: <input onChange={(e) => this.onChangeRuleName(e)} value={this.state.feedrulesobject.feedrulename} />
                {this.state.feedpropertyselected.feedproperty} : <input onChange={(e) => this.onChangeRulevalue(e)} value={this.state.feedrulesobject.values} />
                <input style={{ marginLeft: "10px" }} type="submit" onClick={this.onSubmit} value="Add Rule" className="btn btn-primary" />
            </form>
        </div>


    );
    return (
        <Fragment>
            {this.props.feedrules1.map((feedrule, index) => {
                return (
                    <Card>
                        <CardBody>
                            <CardTitle>{feedrule.feedrulename}</CardTitle>
                            {feedrule.feedproperty}: <b>{feedrule.values}</b>

                        </CardBody>
                    </Card>

                )
            }

            )}
            <button style={{ float: "right" }} onClick={(e) => this.addCountry(e)}>Add Rule</button>

            {this.state.feedrules.map((feedrule, index) => {
                return (
                    <div key={index}>
                        <Card>
                            <CardBody>
                                <CardTitle>New Feed Rule {index + 1}</CardTitle>
                                {/* Rule Name:  <input value={feedrule} onChange={(e) => this.handleChange(e, index)} /> */}

                                <div style={{ width: "30%" }}>
                                    Add Property:   <select onChange={(e) => this.handleOptionChange(e, index)} className="form-control" required >
                                        <option disabled selected value="">Select Property</option>
                                        {propertiesOptions}
                                    </select>
                                </div>
                                {isEmpty(this.state.feedpropertyselected) ? '' : DisplayProperties}

                            </CardBody>
                            <button style={{ float: "right" }} onClick={() => this.handleRemove(index)}>Remove</button>
                        </Card>

                    </div>
                )
            }

            )}

        </Fragment>
    );
}