import React, { Component } from "react";
import classnames from "classnames";
import { Container } from "reactstrap";
import ContentBlock from "../../utilities/ContentBlock";
import "./section.scss";

class Section extends Component {
  render() {
    const section = this.props.section;
    const bgImg = section.bg_img;
    const content = section.content;
    const bgImgClass = bgImg ? "bg-img" : "";

    console.log(section);
    console.log(content);
    return (
      <section
        className={classnames(this.props.section.class, bgImgClass)}
        style={bgImg ? { backgroundImage: `url(${bgImg.url})` } : null}
      >
        <Container
          fluid={!content.containerized}
          className={content.section_content_class}
        >
          <Title
            title={this.props.section.title}
            titleClass={this.props.section.titleClasses}
          />
          {content ? <ContentBlock content={content.section_content} /> : null}
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
