import React, { Component } from 'react';
import API from '../utils/API';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import { Input, FormBtn, SaveBtn } from '../components/Form';
import { List, ListItem } from '../components/List';


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
                        books: results.data.items,
                        hasSearched: true
                    });
                })
                .catch(err => console.log(err));
        };
    };

    bookSaver = book => {
        API.saveBook(book)
            .then(res => {
                const remaingBooks = this.state.books.filter(book => book.id !== res.data.id);
                this.setState({
                    books: remaingBooks
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron/>
                <div>
                    <form >
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name='title'
                            label='Title'
                            placeholder='Search for a book by title'
                        />
                        <FormBtn
                            onClick={this.handleFormSubmit}
                            classname='btn btn-primary'
                        >
                            Search
            </FormBtn>
                    </form>
                    {this.state.books.length ? (
                        <List >
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    <br />
                                    <strong>{book.volumeInfo.title}</strong>
                                    <br />
                                    <strong>By: {book.volumeInfo.authors[0]}</strong>
                                    <p>{book.volumeInfo.description}</p>
                                    <SaveBtn
                                        onClick={() => this.bookSaver({
                                            _id: book.id,
                                            author: book.volumeInfo.authors[0],
                                            title: book.volumeInfo.title,
                                            description: book.volumeInfo.description,
                                            image: book.volumeInfo.imageLinks.thumbnail,
                                            link: book.selfLink
                                        })}
                                    >Save</SaveBtn>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results</h3>
                        )}
                </div>
            </div>
        )
    }
}

export default Search