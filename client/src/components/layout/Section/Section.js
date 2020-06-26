import React, { Component } from "react";
import { Container } from "reactstrap";
import ContentBlock from "../../utilities/ContentBlock";
import "./section.scss";

class Section extends Component {
  render() {
    //console.log(this.props);
    return (
      <section
        className={this.props.bgImg ? `bg-img` : null}
        style={
          this.props.bgImg
            ? { backgroundImage: `url(${this.props.bgImg.url})` }
            : null
        }
      >
        <Container
          className={
            this.props.inGrid
              ? `container ${this.props.className}`
              : `container-fluid  ${this.props.className}`
          }
        >
          <Title
            title={this.props.title}
            titleClass={this.props.titleClasses}
          />
          {this.props.content ? (
            <ContentBlock content={this.props.content.section_content} />
          ) : null}
        </Container>
      </section>
    );
  }
}

const Title = (props) =>
  props.title ? (
    <h2 className={`section-title ${props.titleClass}`}>{props.title}</h2>
  ) : null;

export default Section;
