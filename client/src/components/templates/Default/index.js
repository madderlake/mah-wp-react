import React, { Component } from 'react';
import ContentBlock from '../../utilities/ContentBlock';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './index.css';

class Default extends Component {

	render() {

		if (this.props.data) {

			let data = this.props.data;

			return (
				<div>
					<Container>
						<Row>
						<article className={`${this.props.slug} default-template`}>
							<h1>{data.title.rendered}</h1>
							<ContentBlock content={data.content.rendered} />
						</article>
						</Row>
					</Container>
					
				</div>
			);
		}

		return null;
	}
}

export default Default;
