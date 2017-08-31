import React from 'react';
import {Link} from 'react-router';

 const HeaderTabs=()=>{
	return(
		<div>
			<Link to={"/mybooks"}>MyBooks</Link> 
			<Link to={"/mycharts"} className="my-chart">My charts</Link> 
		</div>
	);
}

export default HeaderTabs;