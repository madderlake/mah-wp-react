import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col, Container } from 'reactstrap';
import ContentBlock from '../../utilities/ContentBlock';
import { Title } from '../Section/Section';
import './columns.scss';

class Columns extends Component {
  render() {
    const section = this.props.section;
    const content = section.content;

    const colGroup = this.props.columns;
    //const containerized = this.props.containerized;
    //console.log(containerized);
    //const section = this.props.section;
    const getCols = Object.entries(colGroup).map((item, index) => {
      const col = item[1][0];
      console.log(col);
      const desktopWidth = col.width.desktop;
      const tabletWidth = col.width.tablet;
      const phoneWidth = col.width.phone;
      const colClass = col.class;

      return (
        <Col
          key={index}
          sm={phoneWidth}
          md={tabletWidth}
          lg={desktopWidth}
          className={classNames(this.props.className, colClass)}
        >
          {/* <ColumnTitle>{colTitleText}</ColumnTitle> */}

          <ContentBlock content={col.content} />
        </Col>
      );
    });

    return (
      <section className={`column-wrap ${section.section_class}`}>
        <Container
          fluid={!content.containerized}
          className={content.content_class}
        >
          <Title
            className={section.section_title_class}
            title={section.section_title}
          />
          <ContentBlock content={content.section_content} />
          <Row>{getCols}</Row>
        </Container>
      </section>
    );
  }
}

export default Columns;
