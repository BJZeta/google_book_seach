import React, { Component } from 'react';
import API from '../utils/API';
import { ViewBtn, DeleteBtn } from '../components/Form';
import { List, ListItem } from '../components/List';


class Save extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        API.getBooks()
            .then(results => {
                this.setState({
                    books: results.data
                });
            })
            .catch(err => console.log(err));
    }

    deleteBook = () => {
        API.deleteBook(id)
            .then(res => this.getBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.books.length ? (
                    <List >
                        {this.state.books.map(book => (
                            <ListItem key={book._id}>
                                <img src={book.img} alt={book.title} />
                                <br />
                                <strong>{book.title}</strong>
                                <br />
                                <strong>By: {book.author}</strong>
                                <p>{book.description}</p>
                                <ViewBtn
                                    href={book.link}
                                >
                                    View
                                </ViewBtn>
                                <DeleteBtn
                                    id={book._id}
                                    onClick={() => this.deleteBook(book._id)}
                                >
                                    Delete
                                </DeleteBtn>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>Nothing Saved :(</h3>
                    )}
            </div>
        )
    }
}

export default Save;