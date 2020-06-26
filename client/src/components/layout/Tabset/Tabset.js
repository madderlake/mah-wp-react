import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Container,
  CardHeader,
} from "reactstrap";
import classnames from "classnames";
import ContentBlock from "../../utilities/ContentBlock";
import "./tabset.scss";

class Tabset extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const tabList = this.props.tab;

    const getTabs = tabList.map((tab, index) => {
      // if (tab.active) {
      return (
        <NavItem key={index}>
          <NavLink
            onClick={() => {
              this.toggle(index);
            }}
            className={classnames({
              active: this.state.activeTab === index,
            })}
          >
            {tab.tab_title}
          </NavLink>
        </NavItem>
      );
      //}
    });

    const getTabPanes = tabList.map((tab, index) => {
      //if (tab.active) {
      return (
        <TabPane tabId={index} key={index}>
          <Card>
            <CardHeader>
              <NavLink
                onClick={() => {
                  this.toggle(index);
                }}
                className={classnames({
                  active: this.state.activeTab === index,
                })}
              >
                {tab.tab_title}
              </NavLink>
            </CardHeader>
            {/* <Collapse isOpen={this.state.collapse}> */}
            <CardBody>
              <ContentBlock content={tab.tab_content} />
            </CardBody>
            {/* </Collapse> */}
          </Card>
        </TabPane>
      );
      //}
      //return null;
    });
    return (
      <section>
        <Container className={this.props.inGrid ? `` : `container-fluid `}>
          <Nav tabs>{getTabs}</Nav>
          <TabContent activeTab={this.state.activeTab}>
            {getTabPanes}
          </TabContent>
        </Container>
      </section>
    );
    // return null;
  }
}

export default Tabset;
