import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Sidebar extends Component {

	render() {

		if (this.props.data) {

			let data = this.props.data;

			return (
				<Container>
					<Row className="pt-3">
						<Col md={8}>	
							<article className={`${this.props.slug} sidebar-template`}>
								<h1>{data.title.rendered}</h1>
								<ContentBlock content={data.content.rendered} />
							</article>
				
							</Col>
						<Col md={4}>
							<h4>This is the sidebar - ready for widgets and such!</h4>
						</Col>
						</Row>
				</Container>
			);
		}

		return null;
	}
}

export default Sidebar;
