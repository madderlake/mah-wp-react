import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, MenuItem, Alignments } from 'react-foundation';
import { Link } from 'react-router-dom';

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
					<MenuItem key={item.ID}><Link to={item.url}>{item.title}</Link></MenuItem>
				);
			})
		}

		return null;
	}

	render() {
		return (
			<header className="header-main">
			<div className="grid-container">
				<nav className="grid-x grid-padding-x">
					<Menu alignment={Alignments.LEFT}>
						{this.buildMenu()}
					</Menu>
				
				</nav>
				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
