import React from 'react';
import Header from './Header';
import Title from './Title';
import AddPostForm from './AddPostForm';


class App extends React.Component {

render() {
	return (
		<div>
			<Header />
			<div className="main-page">
				<Title title="Blog Poster" />
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