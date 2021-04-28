import { Component } from "react";
import agent, { CancelToken } from './utils/agent';

import Book from './Book';

class Books extends Component {
    state = {
        books: [],
    }
    componentDidMount() {
        this.source = CancelToken.source();
        agent.get('/buku', {
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
                {this.state.books.length === 0 && (
                    <h3>Katalog buku kosong</h3>
                )}
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