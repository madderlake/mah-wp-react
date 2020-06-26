import React, { Component } from "react";
import classnames from "classnames";
//import ContentBlock from "../../utilities/ContentBlock";
import "./cards.scss";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  CardGroup,
  Button,
  // Row,
  Col,
} from "reactstrap";

class Cardset extends Component {
  render() {
    const cardList = this.props.card;
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
          className={classnames("card-col")}
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
      <section
        className={`card-set ${
          this.props.inGrid ? "container" : "container-fluid"
        }`}
      >
        {/* <Row> */}
        <Title title={this.props.title} titleClass={this.props.class} />
        {/* <div className="card-deck">{getCards}</div> */}
        <CardGroup>{getCards}</CardGroup>
        {/* </Row> */}
      </section>
    );
  }
}
const Title = (props) =>
  props.title ? <h2 className={props.titleClass}>{props.title}</h2> : null;

export default Cardset;
