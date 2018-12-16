import React, { Component } from 'react';

import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Home extends Component {

	render() {

		if (this.props.data) {

			const data = this.props.data;

			return (
				<div className="grid-container">
					<article className="home">
						<h1>{data.title.rendered}</h1>
						<ContentBlock content={data.content.rendered} />
					</article>
				</div>
			);
		}

		return null;
	};
};

export default Home;
