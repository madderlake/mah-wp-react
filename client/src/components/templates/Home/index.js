import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import Row from "react-bootstrap/Row";
import ContentBlock from '../../utilities/ContentBlock';
import './index.scss';

class Home extends Component {
  render() {
    if (this.props.data) {
      const data = this.props.data;

      return (
        <div>
          <Container>
            <article className="home">
              <h1>{data.title.rendered}</h1>
              <ContentBlock content={data.content.rendered} />
            </article>
          </Container>
        </div>
      );
    }

    return null;
  }
}

export default Home;
