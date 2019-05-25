import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import api from '../../../api';

import './index.css';

const mapStateToProps = (state) => ({
	mainMenu: state.api.menus.main
});

const mapDispatchToProps = (dispatch) => ({
	loadMenu: (menu) => dispatch({ type: 'LOAD_MENU', payload: menu })
});

class Header extends Component {

	constructor(props) {
		super(props);
		this.props.loadMenu(api.Menus.bySlug('main'));
		this.buildMenu = this.buildMenu.bind(this);
	}

	buildMenu() {
		if (this.props.mainMenu) {
			return this.props.mainMenu.map((item, i) => {
				
				return (
					<NavItem as="li" eventkey={item.url} key={item.ID}><Link to={item.url}>{item.title}</Link></NavItem>
				);
			})
		}

		return null;
	}

	render() {
		return (
			<header className="header-main">
			<Container >
				<Nav fill as="ul" activeKey={ this.selectedKey } onSelect={ this._onSelect }>
					
					{this.buildMenu()}
					
						
					
				
				</Nav>
				</Container>
				
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
