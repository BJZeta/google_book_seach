import axios from 'axios';

export default {

    bookSearch: (title) => {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title);
    },
    getBooks: () => {
        return axios.get('/api/books');
    },
    deleteBook: (id) => {
        return axios.delete('/api/books/' + id);
    },
    saveBook: (bookData) => {
        return axios.post('/api/books/', bookData);
    }
};