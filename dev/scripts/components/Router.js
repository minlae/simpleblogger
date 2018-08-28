import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import App from './App';
import Header from './Header';
import AddPostForm from './AddPostForm';
import Search from './Search';


const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/addpost" component={AddPostForm} />
			<Route component= {App} />
		</Switch>
	</BrowserRouter>
);

export default Router;