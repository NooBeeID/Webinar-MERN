import { Component } from 'react';
import { Link } from 'react-router-dom';

import agent from './agent';

class Books extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    agent.get('/books')
      .then(response => {
        console.log(response);
        this.setState({ books: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="books">
        {this.state.books.length === 0 && <h3>Tidak ada buku</h3>}
        {this.state.books.map(book => (
          <div className="book" key={book._id}>
            <h4>{book.judul}</h4>
            <small>Reyhan Jovie</small>
            <p>{book.deskripsi}</p>
            <Link to={`/${book._id}`}>Detail</Link>
          </div> 
        ))}
      </div>
    );
  }
}

export default Books;
