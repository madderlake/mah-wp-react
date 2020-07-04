import React, { Component } from 'react';
import ContentBlock from '../../utilities/ContentBlock';
import { Container } from 'reactstrap';
//import Section from '../../layout/Section/Section';
import './index.css';

class Default extends Component {
  render() {
    if (this.props.data) {
      let data = this.props.data;
      console.log(this.props.data);

      return (
        <section>
          <article className={`${this.props.slug} default-template`}>
            <Container>
              <h1>{data.title.rendered}</h1>
              <ContentBlock content={data.content.rendered} />
            </Container>
          </article>
        </section>
      );
    }

    return null;
  }
}

export default Default;
