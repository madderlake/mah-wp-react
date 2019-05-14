import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Default extends Component {

	render() {

		if (this.props.data) {

			let data = this.props.data;

			return (
				//<div>
				<Grid container spacing={24}>
					<article className={`${this.props.slug} default-template`}>
						<h1>{data.title.rendered}</h1>
						<ContentBlock content={data.content.rendered} />
					</article>
				</Grid>
				//</div>
			);
		}

		return null;
	}
}

export default Default;
