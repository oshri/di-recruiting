import React, { Component } from 'react';
import * as _ from 'underscore';
import './Header.css';

import Logo from '../Logo';
import Menu from '../Menu';

class Header extends Component {
	delta = 5;
    navbarHeight = 50;
    
	constructor(props) {
		super(props);

		this.state = {
			didScroll: true,
			lastScrollTop: 0,
			navClass: 'nav-down'
		};

		this.hideHeader = this.hideHeader.bind(this);
		this.showHeader = this.showHeader.bind(this);
		this.getDocHeight = this.getDocHeight.bind(this);
		this.hasScrolled = this.hasScrolled.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	hideHeader() {
		this.setState({
			navClass: 'nav-up'
		});
	}

	showHeader() {
		this.setState({
			navClass: 'nav-down'
		});
	}

	getDocHeight() {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	}

	hasScrolled() {
		const st = window.scrollY;

		if (Math.abs(this.state.lastScrollTop - st) <= this.delta) return;

		if (st > this.state.lastScrollTop && st > this.navbarHeight) {
			this.hideHeader();
		} else {
			if (st < this.getDocHeight()) {
				this.showHeader();
			}
		}

		this.setState({
			lastScrollTop: st
		});
	}

	handleScroll(event) {
		this.setState({
			didScroll: true
		});

		_.throttle(this.hasScrolled(), 250);
	}

	render() {
		return (
			<header id="navbar" className={`Header ` + this.state.navClass}>
				<article>
					<Logo />
					<Menu />
				</article>
			</header>
		);
	}
}

export default Header;
