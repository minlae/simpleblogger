import React from 'react';
import axios from 'axios';

class Users extends React.Component {

	constructor() {
		super();
		this.state = {
			users: []
		}

		this.handleChange = this.handleChange.bind(this);

		this.usersRef = React.createRef();
	}
	
	handleChange(event) {
		const user = { user: this.usersRef.current.value } 
		this.props.getUsername(user);
	}

	componentDidMount() {
		axios({
			url: `https://jsonplaceholder.typicode.com/users`
		}).then((res) => {
			console.log(res.data);
			this.setState({
				users: res.data
			});
		});

	}

	render() {
		return (
			<div className="username-container">
				<label htmlFor="names">Username:</label>
				<select onChange={this.handleChange} ref={this.usersRef} id="names" name="names">
					{this.state.users.map((user, i) => {
						return (
							<option value={user.name} key={user.id}>{user.name}</option>
						);
					})}
				</select>
			</div>
		)
	}
};

export default Users;

