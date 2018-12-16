import React, { Component } from 'react';

import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class Sidebar extends Component {

	render() {

		if (this.props.data) {

			let data = this.props.data;

			return (
				<div className="grid-container">
					<div className="grid-x grid-padding-x">
						<div className="cell small-8">
							<article className={`${this.props.slug} sidebar-template`}>
								<h1>{data.title.rendered}</h1>
								<ContentBlock content={data.content.rendered} />
							</article>
						</div>
						<div className="cell small-4">
							<h4>This is the sidebar - ready for widgets and such!</h4>
						</div>
					</div>
				</div>
			);
		}

		return null;
	}
}

export default Sidebar;
