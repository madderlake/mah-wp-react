import React, { Component } from 'react';

import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

class FlexContent extends Component {

	render() {

		if (this.props.data) {

			let data = this.props.data;
			let acf = this.props.data.acf;
			
			const blocks = acf.content;
			
			

			return (
				<div className={`grid-container ${acf.page_class}`}>
					<article className={`${this.props.slug} flex-template`}>
						<h1>{acf.page_title}</h1>
						
						{ blocks.map((block, index) => (
							
							
						
							<section className={`content-${index}`} dangerouslySetInnerHTML={{ __html: block.section_content || "Nothing to see here" }}
							<h2>{{ block.section_class }}</h2>
						))
						}
						 />
					</article>
				</div>
			);
		}

		return null;
	}
}

export default FlexContent;
