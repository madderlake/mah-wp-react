import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Container,
  CardHeader
} from 'reactstrap';
import classnames from 'classnames';
import { Title } from '../Section/Section';
import ContentBlock from '../../utilities/ContentBlock';
import './tabset.scss';

class Tabset extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const section = this.props.section;
    const content = section.content;
    const tabList = this.props.tab;

    const getTabs = tabList.map((tab, index) => {
      return (
        <NavItem key={index}>
          <NavLink
            onClick={() => {
              this.toggle(index);
            }}
            className={classnames({
              active: this.state.activeTab === index
            })}
          >
            {tab.tab_title}
          </NavLink>
        </NavItem>
      );
    });

    const getTabPanes = tabList.map((tab, index) => {
      return (
        <TabPane tabId={index} key={index}>
          <Card>
            <CardHeader>
              <NavLink
                onClick={() => {
                  this.toggle(index);
                }}
                className={classnames({
                  active: this.state.activeTab === index
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
    });
    return (
      <section className={section.section_class}>
        <Container
          fluid={!content.containerized}
          className={content.content_class}
        >
          <Title
            className={section.section_title_class}
            title={section.section_title}
          />

          <ContentBlock content={content.section_content} />

          <Nav tabs>{getTabs}</Nav>
          <TabContent activeTab={this.state.activeTab}>
            {getTabPanes}
          </TabContent>
        </Container>
      </section>
    );
  }
}

export default Tabset;
