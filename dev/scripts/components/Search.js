import React from 'react';
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import Suggestions from './Suggestions';

class Search extends React.Component {

	constructor() {
		super();

		this.state = {
			query: '',
			results: []
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.getInfo = this.getInfo.bind(this);

		this.searchRef = React.createRef();

	}


	handleInputChange() {

		this.setState({
			query: this.searchRef.current.value
		}, () => {
				//below is just a way of limiting when you actually make the API call. 
			if (this.state.query && this.state.query.length > 1) {
				this.getInfo();				
			}
			else if (!this.state.query) {
				// clear results if there is nothing in the query
				this.setState({
					results: []
				});
			}
		});
	}

	getInfo() {
		axios.get(`https://jsonplaceholder.typicode.com/posts?title=${this.state.query}&limit=10`)
			.then((res) => {
				const data = res.data;
				this.setState({
					results: data
				});
			}).catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="main-page">
					<Title title="Search 🔎" />
					<div className="main-page-container">
						<form>
							<label htmlFor="search-input">Search:</label>
							<input
								placeholder="Search posts here"
								ref={this.searchRef}
								onChange={this.handleInputChange}
								className="search-input"				
							/>
							<Suggestions results={this.state.results} />
						</form>
					</div>
				</div>
			</div>
		)
	}
};

export default Search;