import React, {Component} from 'react';
import {Tabs, TabItem, TabsContent }from 'react-foundation';
//import ContentBlock from '../../utilities/ContentBlock';
import './index.css';



class Tabset extends Component {
	
	
	render(){
		
			
	return  (
		<section className='tab-set'>
			
				
			<Tabs className={this.props.tabsetClass} tabs={this.props.tabs} content = {this.props.tab_content}/>
			
			 

		</section>
		);
	}		
}

//const Title = (props) => (props.title ? <h2 className={props.titleClass}>{props.title}</h2> : null);


export default Tabset;