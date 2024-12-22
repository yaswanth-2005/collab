import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCommentDots } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import PatreonRae from "../assets/img/issa-rae.png";

import styled from "styled-components";

export class Navbar extends Component {
  getStyle = {
    navbar: {
      position: "fixed",
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      boxShadow: "0px 0px 2px grey",
      zIndex: 100,
      backgroundColor: "white",
    },
    navbarBrand: {
      paddingLeft: "15px",
    },
    navbarMenu: {
      display: "flex",
      margin: "0",
      padding: "0",
      listStyle: "none",
      // backgroundColor: 'yellow'
    },
    navbarItem: {
      textDecoration: "none",
      display: "inline-block",
      padding: "20px",
      color: "black",
      // backgroundColor: 'teal'
    },
  };

  render() {
    return (
      <nav style={this.getStyle.navbar}>
        <h1 className="px-3 py-2">elevatr</h1>

        <ul style={this.getStyle.navbarMenu}>
          {this.props.loggedIn ? (
            <LoggedInLink
              getStyle={this.getStyle}
              handleLogout={this.props.handleLogout}
              user={this.props.user}
            />
          ) : (
            <NotLoggedInLink getStyle={this.getStyle} />
          )}
        </ul>
      </nav>
    );
  }
}

function NotLoggedInLink(props) {
  return (
    <React.Fragment>
      <NavLink to="/" getStyle={props.getStyle}>
        Start my page
      </NavLink>
      <NavLink to="/explore" getStyle={props.getStyle}>
        Explore
      </NavLink>
      <NavLink to="/signup" getStyle={props.getStyle}>
        Sign up
      </NavLink>
      <NavLink to="/login" getStyle={props.getStyle}>
        Log in
      </NavLink>
    </React.Fragment>
  );
}

function LoggedInLink(props) {
  return (
    <React.Fragment>
      <NavLink to="/home" getStyle={props.getStyle}>
        <FaCommentDots />
      </NavLink>
      <NavLink to="/home" getStyle={props.getStyle}>
        <FaSearch />
      </NavLink>
      <li>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              border: "none",
              color: "white",
              padding: "19px",
            }}
          >
            <UserProfile />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>{props.user.username}</Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item href="/">My Page</Dropdown.Item>
            <Dropdown.Item href={`/users/${props.user.username}/dashboard`}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/" onClick={props.handleLogout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </React.Fragment>
  );
}

const Linked = styled(Link)`
  textdecoration: none;
  display: inline-block;
  padding: 20px;
  color: black;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

function NavLink(props) {
  return (
    <li>
      <Linked to={props.to}>{props.children}</Linked>
    </li>
  );
}

function UserProfile(props) {
  return (
    <img
      src={PatreonRae}
      alt="profile"
      className="img-circle"
      style={{ maxWidth: "30%" }}
      onClick={props.handleLogout}
    />
  );
}

export default Navbar;
