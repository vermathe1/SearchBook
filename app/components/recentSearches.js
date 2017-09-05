import React from 'react';

const RecentSearches = (props)=>{
 	return(
		<ul>
			{!!props.search && props.search.map((each,index)=> <Listing key = {index} data = {each} />)}
		</ul>
	);
};

const Listing = (props)=>{
	return(
		<li> 
			{props.data} 
		</li>
	);
};

export default RecentSearches;
