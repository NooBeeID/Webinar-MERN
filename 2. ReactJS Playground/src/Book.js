import { Component } from "react";

import { Link } from 'react-router-dom'

class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <h5>{book.judul}</h5>
                <small>{book.pengarang}</small>
                <Link to={book._id}>Detail</Link>
            </div>
        )
    }
}

export default Book;