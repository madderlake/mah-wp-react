import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.css';


class Section extends Component {

	render(){

	return  (
		<section className={this.props.inGrid  ? `container ${this.props.className}` : `container-fluid  ${this.props.className}`}
			style={this.props.bgImg ? {backgroundImage:`url(${this.props.bgImg})`}: null} >
				<Row>
					<Title title={this.props.title} titleClass={this.props.titleClasses}/>
					{this.props.children}
				</Row>
			
		</section>
		);
	}
}

const Title = (props) => (props.title ? <h2 className={props.titleClass}>{props.title}</h2> : null);

export default Section;