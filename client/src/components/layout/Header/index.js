import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import api from "../../../api";

import "./index.css";

const mapStateToProps = state => ({
  mainMenu: state.api.menus.main
});

const mapDispatchToProps = dispatch => ({
  loadMenu: menu => dispatch({ type: "LOAD_MENU", payload: menu })
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.props.loadMenu(api.Menus.bySlug("main"));
    this.buildMenu = this.buildMenu.bind(this);
  }

  buildMenu() {
    if (this.props.mainMenu) {
      return this.props.mainMenu.map((item, i) => {
        const pageURI = this.props.location.pathname;
        console.log(pageURI);

        return (
          <NavItem as="li" key={item.ID}>
            <Link
              to={item.url}
              className={`nav-link${item.url === pageURI ? " active" : ""}`}
            >
              {item.title}
            </Link>
          </NavItem>
        );
      });
    }

    return null;
  }

  render() {
    return (
      <header className="header-main">
        {/* <Container> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Mary A. Hayne</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              fill
              as="ul"
              activeKey={this.selectedKey}
              onSelect={this._onSelect}
            >
              {this.buildMenu()}
            </Nav>
            {/* </Container> */}
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
