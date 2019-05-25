import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.css';



class Section extends Component {
	
	const title = '';

	render(){
	return  (
		<section className={this.props.className} >
				<SectionTitle title={title}/> 					
					{this.props.children}	
		</section>
		);
	}		
}

const SectionTitle = ({title}) => {
	
	return
		<h2>{title}</h2>
	
}

export default Section;