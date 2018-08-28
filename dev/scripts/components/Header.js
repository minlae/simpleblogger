import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AddPostForm from './AddPostForm';
import Search from './Search';


const Header = props => (
	<header>
		<nav className="header-menu">
			<Link className="nav-link" to="/search">Search</Link>
			<Link className="nav-link" to="/">Add Post</Link>
		</nav>
	</header>
);

export default Header;