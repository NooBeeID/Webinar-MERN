import { Component } from 'react';

import agent from './agent';

import BookForm from './BookForm';

class AddBook extends Component{
  handleSubmit = ({ judul, deskripsi }) => {
    agent.post('/books', {
      judul,
      deskripsi,
    })
  }
  render() {
    return (
      <BookForm onSubmit={this.handleSubmit} />
    );
  }
}

export default AddBook;
