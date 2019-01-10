import React, { Component } from 'react';

import ContentBlock from '../../utilities/ContentBlock';

import Section from '../../layout/Flex';

import './index.css';

class FlexContent extends Component {

	render() {

		if (this.props.data) {

			//let data = this.props.data;
			let acf = this.props.data.acf;
			
			const blocks = acf.content;
			
			

			return (
				<div className={`grid-container ${acf.page_class}`}>
					<article className={`${this.props.slug} flex-template`}>
						<h1>{acf.page_title}</h1>
						
						{ blocks.map((block, index) => (
/*
					<section className={block.section_class} key={index}>
						<h2>{block.section_title }</h2>	
					<ContentBlock content={block.section_content} />
						</section>							
						
*/
						
							<Section className={block.section_class} key={index}>
						
// 								<SectionTitle title={block.section_title} />
								<ContentBlock content={block.section_content} />
							</Section>
						
						))
					
						}
					</article>
				</div>
			);
		}

		return null;
	}
}

export default FlexContent;
