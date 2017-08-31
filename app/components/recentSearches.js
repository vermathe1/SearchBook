import React from 'react';
import {getItemFromLocalStorage} from '../localStorage.js';

const RecentSearches = () => {
	const searches = getItemFromLocalStorage('search') || undefined;
 	return(
		<ul>
			{!!searches && searches.map((each,index) => <Listing key={index} data={each} />)}
		</ul>
	);
};

const Listing = (props) => {
	return(
		<li> 
			{props.data} 
		</li>
	);
};

export default RecentSearches;
