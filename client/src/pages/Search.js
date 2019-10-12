import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Search extends Component {
    state = {
        books: [],
        title: '',
        author: '',
        description: '',
        image: ''
    };
    
}