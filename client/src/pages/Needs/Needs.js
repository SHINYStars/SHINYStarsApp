import React, { Component } from 'react';
import { Input } from "../../components/Form";
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { CardPanel, Button, Row, Col, Collection, CollectionItem } from 'react-materialize';
import './Needs.css';

class Needs extends Component {
    state = {
        needs:[],
        orgId: this.props.match.params.orgId,
        need: "",
        comment: "",
        message:""
    };

    componentDidMount=()=>{
        this.loadNeeds();
    }

    loadNeeds =() =>{
        API.getNeeds(this.state.orgId)
        .then(res => {
            if(!res.data.length){
                this.setState({ message: "No needs for this organization." })
            }
            this.setState({ needs: res.data });

        })
        .catch(err => console.log(err));
    }

    addConfirm = () => {
        this.setState({
            confirm: true
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    validateForm = () =>{
        const { need } = this.state;
        return (need );
    }

    clear =() =>{
        this.setState({
            need: "",
            comment: ""
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { need, comment } = this.state;

        if (this.validateForm()) {
            API.newNeed({
                orgId: this.state.orgId,
                need: need,
                comment: comment
            })
                .then(res => {
                    this.clear();
                    this.addConfirm();
                    this.loadNeeds();
                })
                .catch(err => console.log(err));
        }
    };

    deleteNeed=(needId)=>{
            API.removeNeed(needId)
            .then(res => {
                console.log(res.data);
                this.loadNeeds();
            })
            .catch(err => console.log(err));
        
    }

    render() {
        
        return (
            <div className="container" id="needs">
                <Row>
                    <Col s={6}>
                        <form>
                            <CardPanel>

                                <h4>Needs</h4>

                                <Input
                                    value={this.state.need}
                                    onChange={this.handleInputChange}
                                    name="need"
                                    placeholder="Need *" />
                                <Input
                                    value={this.state.comment}
                                    onChange={this.handleInputChange}
                                    name="comment"
                                    placeholder="Comments" />

                                <div>
                                    <span><i>*required field</i></span>
                                </div>
                                <Button
                                    disabled={!(this.validateForm())}
                                    onClick={this.handleFormSubmit}>
                                    Save</Button>
                                <SweetAlert
                                    show={this.state.confirm}
                                    type='success'
                                    title='Need added to organization!'
                                    text=''
                                    onConfirm={() => {
                                        this.setState({
                                            confirm: false
                                        });
                                    }}
                                />
                            </CardPanel>
                        </form>
                    </Col>
                    <Col s={6}>
                        
                            {this.state.needs.length ? (
                                <Collection>
                                    {this.state.needs.map(needObj => (
                                        <CollectionItem
                                            key={needObj._id}
                                            _id={needObj._id} >{needObj.need}
                                            <a href="#!" onClick={()=>this.deleteNeed(needObj._id)}><i className="fa fa-trash"></i></a>
                                            </CollectionItem>
                                    ))}
                                </Collection>
                            ) : (
                                    <h4 className="text-center">{this.state.message}</h4>
                                )}
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Needs;