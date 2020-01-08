// import external modules
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/auth/authActions';
import {
   Form,
   Collapse,
   Navbar,
   Nav,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";
import {
   // Moon,
   Menu,
   MoreVertical,
   LogOut
} from "react-feather";
import NavbarSearch from "../../../components/search/Search";

import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";

class ThemeNavbar extends Component {

   logout(e) {
      e.preventDefault();
      this.props.logout();
      window.location.assign("/pages/login")
   }
   handleClick = e => {
      this.props.toggleSidebarMenu("open");
   };
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   render() {
      // console.log(this.props)
      const { isAuthenticated } = this.props.auth.auth
      return (
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
            <div className="container-fluid px-0">
               <div className="navbar-header">
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                     onClick={this.handleClick.bind(this)}
                     data-toggle="collapse"
                  />
                  <Form className="navbar-form mt-1 float-left" role="search">
                     <NavbarSearch />
                  </Form>
                  {/* <Moon size={20} color="#333" className="m-2 cursor-pointer"/> */}
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>

               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>



                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src={userImage} alt="logged-in-user" className="rounded-circle width-35" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                    {isAuthenticated ? this.props.auth.auth.user.username : 'Guest'} <span className="text-muted">(Current User)</span>
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />
                              {/* 
                              <Link to="/pages/user-profile" className="p-0">
                                 <DropdownItem>
                                    <User size={16} className="mr-1" /> My Profile
                                 </DropdownItem>
                              </Link>
                              <Link to="/email" className="p-0">
                                 <DropdownItem>
                                    <Inbox size={16} className="mr-1" /> Email
                                 </DropdownItem>
                              </Link>
                              <Link to="/contacts" className="p-0">
                                 <DropdownItem>
                                    <Phone size={16} className="mr-1" /> Contacts
                                 </DropdownItem>
                              </Link>
                              <Link to="/calendar" className="p-0">
                                 <DropdownItem>
                                    <Calendar size={16} className="mr-1" /> Calendar
                                 </DropdownItem>
                              </Link> */}
                              {/* <DropdownItem divider /> */}
                              <ul onClick={this.logout.bind(this)} className="p-0">
                                 <DropdownItem>
                                    <LogOut size={16} className="mr-1" /> Logout
                                 </DropdownItem>
                              </ul>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}
ThemeNavbar.propTypes = {
   auth: PropTypes.object.isRequired,
   logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
   return {
      auth: state.auth
   };
}

export default connect(mapStateToProps, { logout })(ThemeNavbar);
