import React from 'react';
import axios from 'axios';
import Users from './Users';

class AddPostForm extends React.Component {


	constructor() {
		super();
		this.state = {
			usernames: [],
			posts: []
		}

		this.addPost = this.addPost.bind(this);
		this.getUsername = this.getUsername.bind(this);
		this.usersRef = React.createRef();
		this.titleRef = React.createRef();
		this.postRef = React.createRef();
	}

	getUsername(username) {
		const usernames = [ Object.assign({}, username) ];
		this.setState({ usernames });
	}

	addPost(event) {
		event.preventDefault();

		const user = this.state.usernames[0];
		
		const post = {
			title: this.titleRef.current.value,
			post: this.postRef.current.value
		}

		Object.assign( post, user );

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
					<Users getUsername={this.getUsername} />
					<input name="title" ref={this.titleRef} className="title-input" type="text" placeholder="Blog Title"/>
					<textarea name="post" ref={this.postRef} className="post-body-input" placeholder="Write your post here" />
					<button type="submit" className="post-button">Done</button>
				</form>
			</div>
		)
	}
};

export default AddPostForm;