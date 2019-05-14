import React, {Component} from 'react';
import {Tabs, TabItem, TabsContent } from 'react-foundation';
import ContentBlock from '../../utilities/ContentBlock';
//import 'foundation-sites/dist/js/foundation.min.js';
import './index.css';



class Tabset extends Component {

	constructor(props) {
    super(props);
    this.state = {activeTab: 1};
    this._activateTab = this._activateTab.bind(this);
  	}

  	_activateTab(){

  	}

  	componentDidMount() {

	}

	render(){

	const tabList = this.props.tabs;

	const getTabs = (props) => tabList.map((tab, index) => {

		if(tab.active) {

			let activeTab = index + 1 === this.state.activeTab ? 'is-active' : '';

			return <TabItem key={index} className={`${tab.tab_class} ${activeTab}`}><a href={`#panel${index + 1}`} data-tabs-target={`panel${index + 1}`}> {tab.tab_title} </a></TabItem>

		}

		return null;

	});

	const getTabsContent = (props) => tabList.map((tab, index) => {

		if(tab.active) {

			let activeTab = index + 1 === this.state.activeTab ? 'is-active' : '';

			return <div key={index} className={`tabs-panel ${activeTab}`} id={`panel${index +1}`}><ContentBlock content = {tab.tab_content}/></div>

		}

		return null;

	});


	return  (
		<section className="grid-container tab-set">


			<Tabs className={this.props.tabsetClass} >

				{getTabs()}

			</Tabs>

			 <TabsContent>
			 	{getTabsContent()}

			 </TabsContent>

		</section>
		);
	}
}

//const Title = (props) => (props.title ? <h2 className={props.titleClass}>{props.title}</h2> : null);


export default Tabset;