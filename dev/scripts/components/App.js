import React from 'react';
import Header from './Header';
import AddPostForm from './AddPostForm';


class App extends React.Component {

render() {
	return (
		<div>
			<Header />
			<div className="main-page">
				<h1>Blog Poster</h1>
				<div className="main-page-container">
					<div className="input-container">
						<AddPostForm />
					</div>
				</div>
			</div>
		</div>
	)
}
};

export default App;