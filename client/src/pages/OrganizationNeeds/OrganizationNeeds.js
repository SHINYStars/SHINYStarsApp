import React, { Component } from 'react';
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { CardPanel, Row, Col, Collection, CollectionItem } from 'react-materialize';

class OrganizationNeeds extends Component {
    
        state = {
            needs:[],
            orgId: this.props.match.params.orgId,
            message:"",
            userInfo:null,
            organization:null,
            confirm:false,
            error:false
        
    }


    componentDidMount=()=>{
        this.loadNeeds();
        this.setUserInfo(this.props.user);
    }

    loadNeeds =() =>{
        API.getNeeds(this.state.orgId)
        .then(res => {
            if(!res.data.length){
                this.setState({ message: "No needs for this organization." })
            }
            this.setState({ organization: res.data });
            this.setState({needs:this.state.organization.needs})
        })
        .catch(err => console.log(err));
    }

    addConfirm = () => {
        this.setState({
            confirm: true
        })
    }

    errorConfirm = () => {
        this.setState({
            error: true
        })
    }

    setUserInfo=(user)=>{
        console.log("user from props",user);
        if(user!=null){
            this.setState({userInfo:user._id});
        }
    }

    addToShinyList = (needId) => {
        console.log(needId,"user:",this.state.userInfo);
        if(this.state.userInfo){
            API.addNeedToShinyList({
                userId: this.state.userInfo,
                needId:needId
            })
                .then(res => {
                    this.addConfirm();
                })
                .catch(err => console.log(err));
            }else{
                this.errorConfirm();
            }
    };

    render() {
       
        return (
            <div className="container" id="needs">
                <Row>
                    <Col s={12}>
                        <form>
                            <CardPanel>
                                {this.state.organization?(
                                <h4> {this.state.organization.orgName} Needs </h4>):
                               (<h4>Needs </h4>)}

                                {((this.state.needs)&&(this.state.needs.length)) ? (
                                <Collection>
                                    {this.state.needs.map(needObj => (
                                        <CollectionItem
                                            key={needObj._id}
                                            _id={needObj._id} >{needObj.need}
                                            <a href="#!" className="shiny-right" onClick={()=>this.addToShinyList(needObj._id)}><i className="fas fa-plus" id={needObj._id+"ico"}></i> SHINY List</a>
                                            </CollectionItem>
                                    ))}
                                </Collection>
                            ) : (
                                    <h4 className="text-center">{this.state.message}</h4>
                                )}
                                <SweetAlert
                                    show={this.state.confirm}
                                    type='success'
                                    title='Need added to SHINY List!'
                                    text=''
                                    onConfirm={() => {
                                        this.setState({
                                            confirm: false
                                        });
                                        this.props.history.push("/shinylist/"+this.state.userInfo);
                                    }}
                                />
                                <SweetAlert
                                    show={this.state.error}
                                    type='error'
                                    title='We love this gesture to help people in need!'
                                    text='Please signup and login to add to SHINY List.'
                                    onConfirm={() => {
                                        this.setState({
                                            error: false
                                        });
                                    }}
                                />
                            </CardPanel>
                        </form>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default OrganizationNeeds;