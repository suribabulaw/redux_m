import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends Component {
   state = {
      modal: false
   };

   toggle = () => {
      this.setState({
         modal: !this.state.modal
      });
   }

   render() {
      const externalCloseBtn = (
         <button
            className="close"
            style={{ position: "absolute", top: "15px", right: "15px" }}
            onClick={this.toggleExBtn}
         >
            &times;
         </button>
      );
      return (
         <div className="text-center">
            <Button color="danger" onClick={this.toggle}>
               Launch Modal
            </Button>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
               className={this.props.className}
               external={externalCloseBtn}
            >
               <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
               <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </ModalBody>
               <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>
                     Do Something
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                     Cancel
                  </Button>
               </ModalFooter>
            </Modal>
         </div>
      );
   }
}

export default ModalExample;
