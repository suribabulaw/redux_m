// import external modules
import React, { Component } from "react";
import LoginForm from './LoginForm';
import {
   Row,
   Col,
   Card,
   CardBody
} from "reactstrap";



class Login extends Component {

   render() {
      return (
         <div className="container">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="gradient-indigo-purple text-center width-400">
                     <CardBody>
                        <h2 className="white py-4">Login</h2>
                        <LoginForm />
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Login;
