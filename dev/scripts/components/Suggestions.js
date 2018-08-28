import React from 'react';

const Suggestions = (props) => {
	const options = props.results.map(r => (
		<li key={r.id}>
			{r.title}
		</li>
	))
	
	return <ul className="search-results">{options}</ul>
	
}

export default Suggestions;