import React from 'react';
import {combineReducers} from 'redux';
import {getItemFromLocalStorage} from '../localStorage';

const searchingList =(state={'isloading':false},action)=>{
	switch(action.type){
		case "SEARCH_REQUEST":{
			const valueInLocalStorage = getItemFromLocalStorage('search');
			if(valueInLocalStorage === undefined){
				var text = [action.searchingText]
			}else{
				var text = [action.searchingText,...(valueInLocalStorage.length > 10?valueInLocalStorage.slice(0,10):valueInLocalStorage)];
			}
		return Object.assign({},state,{
				'isloading': true,
				'searchingText':text
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
		case "MY_BOOKS":{
			const booksInLocalStorage = getItemFromLocalStorage('addedBooks');
			if(booksInLocalStorage === undefined){
				var mybooks = [action.mybooks];
			}else{
				var mybooks = [action.mybooks,...booksInLocalStorage];
			}
			return Object.assign({},state,{
				'my_books': mybooks
			});
		}
		case "chartYearChnage":{
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
