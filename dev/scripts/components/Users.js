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
		//what shoudl it do on changing this?
		//send the info upstream to AddPostForm
		//LATEST: but you know, none of it makes sense. makes more sense to just not have this as a separate component.

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

	// in componentDidMount here, do the axios call - done
	// here, or in the higher level component? - ok here I think
		// NOTE: State should not depend on component props
	// see wes bos's thing - do I need to make refs to store the info from the select?
	// done!

	//on change you need to pass the data to the AddPostForm so that it has the user's name

	render() {
		return (
			<select ref={this.usersRef} name="names">
				{this.state.users.map((user, i) => {
					return (
						<option value={user.name} key={user.id}>{user.name}</option>
					);
				})}
			</select>
		)
	}
};

export default Users;

