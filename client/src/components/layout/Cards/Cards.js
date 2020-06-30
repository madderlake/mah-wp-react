import React, { Component } from 'react';
import classnames from 'classnames';
import ContentBlock from '../../utilities/ContentBlock';
import './cards.scss';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  CardGroup,
  Button,
  // Row,
  Col
} from 'reactstrap';

class Cardset extends Component {
  render() {
    const section = this.props.section;
    const content = section.content;
    const cardList = this.props.card;
    console.log(content);
    const cardWDesktop = 12 / this.props.columns.desktop;
    const cardWTablet = 12 / this.props.columns.tablet;
    const cardWPhone = 12 / this.props.columns.phone;
    const getCards = cardList.map((card, index) => {
      return (
        <Col
          key={index}
          sm={cardWPhone}
          md={cardWTablet}
          lg={cardWDesktop}
          className={classnames('card-col')}
        >
          <Card
            className={classnames(this.props.className, `h-100`, `shadow-sm`)}
          >
            <CardImg src={card.image.url} />
            <CardBody>
              <CardTitle tag={`h4`}>{card.card_title} </CardTitle>
              <p className="card-text"> {card.card_content} </p>
            </CardBody>
            <CardFooter>
              <Button
                onClick={() => (window.location.href = card.button.button_link)}
              >
                {card.button.button_text}
              </Button>
            </CardFooter>
          </Card>
        </Col>
      );
    });

    return (
      <section className={`card-set ${section.section_class}`}>
        <Container
          fluid={!content.containerized}
          className={content.content_class}
        >
          {section.section_title ? (
            <h2 className={section.section_class}>{section.section_title}</h2>
          ) : (
            ''
          )}
          {section.content ? (
            <ContentBlock content={content.section_content} />
          ) : null}
          <CardGroup>{getCards}</CardGroup>
        </Container>
      </section>
    );
  }
}
// const Title = (props) =>
//   props.title ? <h2 className={props.titleClass}>{props.title}</h2> : null;

export default Cardset;
