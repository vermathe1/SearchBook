import React from 'react';
import {Right,Left} from '../either';
import axios from 'axios';
export const API_HOST = 'https://openlibrary.org';

class Api extends React.Component {
	basicRequest(params){
		const request = {
			method: 'GET',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
		return axios.get(API_HOST+params,request).then(success=>Right(success.data),err=>Left({type:'network_error',msg:err}));
	}

	searchBooks(searchItem){
		return this.basicRequest("/search.json?q=" + searchItem);
	}
}

export default new Api();