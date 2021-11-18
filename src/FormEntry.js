import React, { Component } from 'react'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class FormEntry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             fullName: '',
             address1: '',
             address2: '',
             city: '',
             province: '',
             postCode: ''
        }

        this.readFormValues = this.readFormValues.bind(this)
    }
    

    readInfo = e => {
        console.log(e.target.name)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    readFormValues = e => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <div className="block-example border border-success border-4 mx-5 my-5">
                    <div>
                        <h1 className="text-center mt-3">Data Entry Form</h1>
                    </div>
                    <Form onSubmit={this.readFormValues}>
                        <Row className="mb-3 mx-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.readInfo} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFullName">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Name</Form.Label>
                                <Form.Control name="fullName" placeholder="Full Name" onChange={this.readInfo} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 mx-4" controlId="formGridAddress1">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Address</Form.Label>
                                <Form.Control name="address1" placeholder="1234 Main St" onChange={this.readInfo} />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-4" controlId="formGridAddress2">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Address 2</Form.Label>
                                <Form.Control name="address2" placeholder="Apartment, Studio, or Floor" onChange={this.readInfo} />
                        </Form.Group>

                        <Row className="mb-3 mx-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label className="text-center" style={{ width: "100%" }}>City</Form.Label>
                                <Form.Control name="city" onChange={this.readInfo} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridProvince">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Province</Form.Label>
                                <Form.Select name="province" defaultValue="Choose..." onChange={this.readInfo}>
                                    <option>Choose...</option>
                                    <option>Alberta</option>
                                    <option>British Columbia</option>
                                    <option>Manitoba</option>
                                    <option>New Brunswick</option>
                                    <option>Newfoundland and Labrador</option>
                                    <option>Nova Scotia</option>
                                    <option>Ontario.</option>
                                    <option>Prince Edward Island</option>
                                    <option>Quebec</option>
                                    <option>Saskatchewan</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPostalCode">
                                <Form.Label className="text-center" style={{ width: "100%" }}>Postal Code</Form.Label>
                                <Form.Control name="postCode" onChange={this.readInfo}/>
                            </Form.Group>
                        </Row>
                        
                        <Form.Group className="mb-3 d-flex align-items-center justify-content-center" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Agree to Terms & Conditions?" />
                        </Form.Group>
                        
                        <Button className="mb-3 mx-auto d-block" variant="success" type="submit" value="Submit">Submit</Button>
                    </Form>
                </div>
    
                <div className="text-center text-success block-example border border-success border-4 mx-5 my-5">
                    <h2>Email: {this.state.email}</h2>
                    <h2>Full Name: {this.state.fullName}</h2>
                    <h2>Address: {this.state.address1}, {this.state.address2}</h2>
                    <h2>City: {this.state.city}</h2>
                    <h2>Province: {this.state.province}</h2>
                    <h2>Postal Code: {this.state.postCode}</h2>
                </div>
            </div>
        )
    }
}
