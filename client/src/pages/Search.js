import React, { Component } from 'react';
import API from '../utils/API';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

class Search extends Component {
    state = {
        books: [],
        title: '',
        hasSearched: false
    };
    
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        if (this.state.title) {
            
            const title = this.state.title;

            API.bookSearch(title)
            .then(results => {
                
                console.log(results.data.items);

                this.setState({
                    results: results.data.items,
                    hasSearched: true
                });
            })
            .catch(err => console.log(err));
        };
    };

    render() { 
        <form >
            <input type="text"/>
        </form>
    }

}