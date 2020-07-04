import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import ContentBlock from '../../utilities/ContentBlock';
import FlexContent from '../FlexContent';
import SidebarContent from '../../layout/Sidebar/Sidebar';
import './index.css';

class Sidebar extends Component {
  render() {
    if (this.props.data) {
      const { sidebar_content } = this.props.data.acf;
      const sidebarContent = sidebar_content.component;
      console.log(sidebar_content.component);
      return (
        <Container>
          <Row>
            <Col md={8}>
              <FlexContent data={this.props.data} />
            </Col>
            <Col md={4} className="c-sidebar">
              <SidebarContent data={sidebarContent} />
            </Col>
          </Row>
        </Container>
      );
    }

    return null;
  }
}

export default Sidebar;
