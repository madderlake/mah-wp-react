import React, { Component } from 'react';
import './index.css';

class ContentBlock extends Component {
	render() {
		return (
			<div className="content-block"
				dangerouslySetInnerHTML={{ __html: this.props.content || "No HTML" }}
			/>
		);
	};
};

export default ContentBlock;