import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Home extends Component {

	render() {

		if (this.props.data) {

			const data = this.props.data;

			return (
				<div>
					<Container>
						<Row>
					<article className="home">
						<h1>{data.title.rendered}</h1>
						<ContentBlock content={data.content.rendered} />	
					</article>
					</Row>
					</Container>
				</div>
			);
		}

		return null;
	};
};

export default Home;
