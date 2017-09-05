import React from 'react';
import {connect} from'react-redux';
import {getItemFromLocalStorage} from '../localStorage.js';
import DisplayUserChart from '../components/chart';
import BooksearchInputform from './bookSearchInput';
import HeaderTabs from './headertabs';
import RecentSearches from'./recentSearches';
import LoadingImage from './loading';
import ShowSearchResult from './showbooklist';
import ShowMyBooks from'./showmybooks';
import ShowError from '../modal';

const header = (props)=>{
	return(
		<div className = 'container'>
			{window.location.pathname === "/" && <BooksearchInputform info = {props} />}
			<HeaderTabs/>
			<div className = "recent-search-tab inline-block">
				{<RecentSearches search = {props.search}/>}
			</div>
			<div className ="info-tab inline-block">
				{!!props.isloading && <LoadingImage/>}
				{window.location.pathname ==="/" && !!props.booksInfo && props.booksInfo.map((data,index)=><ShowSearchResult key = {index} title = {data.title} image = {data.cover_image} dispatch = {props.dispatch} />)}
				{window.location.pathname === "/mybooks" && <ShowMyBooks books = {props.addedBooks}/>}
				{window.location.pathname === "/mycharts" && <DisplayUserChart books = {props.addedBooks} selectedYear = {props.selectedYear} dispatch = {props.dispatch} />}
			</div>
			{!!props.error && <ShowError error={props.error}/>}
		</div>
	);
}
const mapStateToProps = (state)=>{
 const {searchText,booksInfo,isloading,addedBooks,selectedYear,error,search} = state.searchingList;
 return {searchText,booksInfo,isloading,addedBooks,selectedYear,error,search};
}
export default connect(mapStateToProps)(header);