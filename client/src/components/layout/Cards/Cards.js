import React, { Component } from 'react';
import { Title } from '../Section/Section';
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
          <Title
            className={section.section_title_class}
            title={section.section_title}
          />
          <ContentBlock content={content.section_content} />
          <CardGroup>{getCards}</CardGroup>
        </Container>
      </section>
    );
  }
}

export default Cardset;
