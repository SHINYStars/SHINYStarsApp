import React, { Component } from 'react';
import API from "../../util/API";
import 'sweetalert/dist/sweetalert.css';
import { CardPanel, Row, Col, Collection, CollectionItem } from 'react-materialize';

class ShinyList extends Component {
    state = {
        shinylist: [],
        userId: this.props.match.params.userId
    };

    componentDidMount = () => {
        this.loadNeeds();
    }

    loadNeeds = () => {
        API.getShinyList(this.state.userId)
            .then(res => {
                console.log(res);
                if (!res.data.shinylist.length) {
                    this.setState({ message: "No needs in SHINY List." })
                }else{
                    this.setState({ shinylist: res.data.shinylist });
                }
            })
            .catch(err => console.log(err));
    }


    render() {

        return (
            <div className="container" id="needs">
                <Row>
                    <Col s={12}>
                        <CardPanel>
                            <h4>SHINY List</h4>

                            {this.state.shinylist.length ? (
                                <Collection>
                                    {this.state.shinylist.map(needObj => (
                                        <CollectionItem
                                            key={needObj._id}
                                            _id={needObj._id} >{needObj.need}
                                        </CollectionItem>
                                    ))}
                                </Collection>
                            ) : (
                                    <h4 className="text-center">{this.state.message}</h4>
                                )}
                        </CardPanel>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default ShinyList;