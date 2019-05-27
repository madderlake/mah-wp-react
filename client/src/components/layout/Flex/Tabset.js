import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import ContentBlock from '../../utilities/ContentBlock';
import './index.css';



class Tabset extends Component {

	// constructor(props) {
  //   super(props);
  //   //this.state = {activeTab: 1};
  //   //this._activateTab = this._activateTab.bind(this);
  // 	}

	render(){
 
	const tabList = this.props.tab;

	const getTabs = (props) => tabList.map((tab, index) => {

		if(tab.active) {

			//let activeTab = index + 1 === this.state.activeTab ? 'is-active' : '';

		return <Tab eventKey={`tab-${index + 1}`} key={index + 1} 	className={`${tab.tab_class}`} title={tab.tab_title}>
			{/* <Container> */}
				<ContentBlock content={tab.tab_content} />
			{/* </Container> */}
		</Tab>
		}
		return null;

	});

	return  (
		<section className={`tab-set ${this.props.inGrid ? 'container' : 'container-fluid'}`}>
		 <Tabs defaultActiveKey="tab-1" className={this.props.tabsetClass} id={this.props.id} >
				{getTabs()}	
			</Tabs>
		</section>
		);
	}
}

export default Tabset;