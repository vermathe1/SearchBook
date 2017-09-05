import React from 'react';
import {combineReducers} from 'redux';

const searchingList =(state={'isloading':false},action)=>{
	switch(action.type){
		case "SEARCH_REQUEST":{
			return Object.assign({},state,{
				'isloading': true,
				'search':[action.searchingText,...(state['search'].length>10 ? state['search'].slice(0,9):state['search'])]
			});
		}
		case "RECEIVED_BOOK":{
			return Object.assign({},state,{
				'isloading': false,
				'booksInfo':action.searchBooks
			});
		}
		case "SEARCHED_TEXT":{
			return Object.assign({},state,{
				'searchText': action.text
			});
		}
		case "ADD_BOOKS":{
			return Object.assign({},state,{
				'addedBooks': [...state['addedBooks'],action.mybooks]
			});
		}
		case "CHART_YEAR_CHANGE":{
			return Object.assign({},state,{
				'selectedYear': action.year
			});
		}
		case "ERROR_IN_FETCHING":{
			return Object.assign({},state,{
				'error': action.error
			});
		}
		default:
			return state;
	}
} 

const rootReducer = combineReducers({searchingList});
module.exports = rootReducer;
