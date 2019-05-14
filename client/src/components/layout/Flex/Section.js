import React, {Component} from 'react';
//import ContentBlock from '../../utilities/ContentBlock';
import Typography from '@material-ui/core/Typography';
import './index.css';


class Section extends Component {

	render(){

	return  (
		<section className={this.props.inGrid ? `grid-container ${this.props.className}` : `grid-container fluid  ${this.props.className}`}
			style={this.props.bgImg ? {backgroundImage:`url(${this.props.bgImg})`}: null} >
			<Title title={this.props.title} titleClass={this.props.titleClasses}/>
			{this.props.children}
		</section>
		);
	}
}

const Title = (props) => (props.title ? <Typography component='h2' variant='h2' className={props.titleClass}>{props.title}</Typography> : null);

export default Section;