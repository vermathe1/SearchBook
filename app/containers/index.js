import React from 'react';
import {  Router, Route, browserHistory } from 'react-router'
import {Switch} from 'react-router-dom';
import Header from '../components/header';

 const Root=()=>{
	return(
	<Router history={browserHistory}>
		<Switch>
			<Route exact path= "/" component= {Header}/>
			<Route exact path="/mybooks" component= {Header}/>
			<Route exact path="/mycharts" component= {Header}/>
		</Switch>	
		
	</Router>
	);
}
export default Root
