import './Books.css';
import { Component } from "react";
import axios from 'axios';

import Book from './Book';

class Books extends Component {
    state = {
        books: [],
    }
    componentDidMount() {
        this.source = axios.CancelToken.source();
        axios.get('https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53/buku', {
            cancelToken: this.source.token,
        })
            .then(({ data }) => {
                this.setState({ books: data });
            })
    }
    componentWillUnmount() {
        this.source.cancel('Component unmounted');
    }
    render() {
        return (
            <div className="books">
                {this.state.books.map(book => (
                    <Book
                        key={book._id}
                        book={book}
                    />
                ))}
            </div>
        )
    }
}

export default Books;