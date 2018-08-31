import React from 'react';
import axios from 'axios';

class AddPostForm extends React.Component {


	constructor() {
		super();
		this.state = {
			users: [],
			posts: []
		}

		this.addPost = this.addPost.bind(this);
		this.usersRef = React.createRef();
		this.titleRef = React.createRef();
		this.postRef = React.createRef();
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

	addPost(event) {
		event.preventDefault();

		const post = {
			user: this.usersRef.current.value,
			title: this.titleRef.current.value,
			post: this.postRef.current.value
		}

		axios.post('https://jsonplaceholder.typicode.com/posts', post)
			.then((res) => {
				console.log(res);
			}).catch((err) => {
				console.log(err);
			});

		event.currentTarget.reset();
	}

	render() {
		return (
			<div className="post-form-container">
				<form onSubmit={this.addPost}>
					<div className="username-container">
						<label htmlFor="names">Username:</label>
						<select ref={this.usersRef} id="names" name="names">
							{this.state.users.map((user, i) => {
								return (
									<option value={user.name} key={user.id}>{user.name}</option>
								);
							})}
						</select>
					</div>
					<input name="title" ref={this.titleRef} className="title-input" type="text" placeholder="Blog Title"/>
					<textarea name="post" ref={this.postRef} className="post-body-input" placeholder="Write your post here" />
					<button type="submit" className="post-button">Done</button>
				</form>
			</div>
		)
	}
};

export default AddPostForm;