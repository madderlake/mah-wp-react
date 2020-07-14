import React, { Component, Fragment } from 'react';
import ContentBlock from '../../utilities/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';

class Default extends Component {
  render() {
    if (this.props.data) {
      let data = this.props.data;
      //console.table(crData);

      return (
        <Fragment>
          <section>
            <article className={`${this.props.slug} default-template`}>
              <Container>
                <h1>{data.title.rendered}</h1>
                <ContentBlock content={data.content.rendered} />
              </Container>
            </article>
          </section>
          <section></section>
        </Fragment>
      );
    }

    return null;
  }
}

export default Default;
