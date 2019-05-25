import React, { Component } from 'react';
import Section from  '../../layout/Flex/Section';
//import Tabset  from '../../layout/Flex/Tabset';


import './index.css';

class FlexContent extends Component {


	render() {

		if (this.props.data) {

			let acf = this.props.data.acf;
			let layouts = acf.content;

			//console.log(layouts);

			const getLayout = layouts.map((section, index) => {

				let layout = section.acf_fc_layout;
				let props = {
					inGrid: section.in_grid,
					className: section.section_class,
					title: section.section_title,
					titleClasses: section.section_title_class,
					content: section.section_content,
					bgImg: section.section_bg_img,
					key: index

				}

				let tabsetProps = {
					key: index,
					tabsetClass: section.tabset_class,
					tabs: section.tab


				}

				switch(layout){
					case "section":
					return <Section {...props} />
					case "tab_set":
					//console.log(tabsetProps)
					//return <Tabset {...tabsetProps} />
					default:
					return <Section {...props} />
				}
			});


			return (

				<div className={`grid-container full ${acf.page_class}`}>
					<article className={`${this.props.slug} flex-template`}>
						<h1 className="grid-container">{acf.page_title}</h1>

						 {getLayout}
					</article>
				</div>
			);
		}

		return null;
	}
}

export default FlexContent;
