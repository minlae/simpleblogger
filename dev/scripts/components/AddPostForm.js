import React from 'react';
import axios from 'axios';

class AddPostForm extends React.Component {

	// Blog Post Title
	// Message Body
	// Done (submit) button
	// Clicking done will make a request for the user's blog post to be saved onto the server

	constructor() {
		super();
		this.state = {
			users: [],
			posts: []
		}

		//refs
		//NOTE: Make sure I doublecheck the docs for React to know why I had to do this. Wes Bos did not have to do it.

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

		// console.log(post.title);
		//this seems to have worked?
		//Yes it worked, but it will never show up on the site because it actually doesn't get added to the server. It just gives you a response like it has. That's the service they provide. But check with Aleks just in case?
		// Not sure if I should know about headers etc and other things related to posting on a server. Maybe just keep it in mind / do more of the Node course but for now don't.
		//also an ID property has been added to post!

		// A question I have: Is it better to somehow split up the users into a different component?
		// Asking because currently, every single time this component loads, an API call is made. With the way the app is currently, that's fine because I do always need a list of usernames whenever I want to post something.
		// But maybe there will be a situation where this will change. Or where I will need the userlist on its own.
		// The thing is, what if you need the userlist but not displayed as a select / option, but in some other way. Makes more sense to only call API once. That's fine then - you can then create a presentational component within this to display it.

		//I really think the usernames should load on their own. But then it will have to be its own form within this. OR you have to say "on change" and everytime it changes, it needs to be passed back up here so we cna have the final result. Maybe not great to do that. Keep it this way for now and maybe ask at interview

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