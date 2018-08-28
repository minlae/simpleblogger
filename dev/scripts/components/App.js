import React from 'react';
import Header from './Header';
import AddPostForm from './AddPostForm';

// may need to reorganize these components later. DropDown and AddPostForm may be just one component? or contained in a bigger component that has both? Since it's like one blog post? So "Add Blog Post" or something?

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