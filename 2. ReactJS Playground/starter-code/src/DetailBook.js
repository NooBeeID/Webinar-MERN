import { Component } from 'react';

import { withRouter } from 'react-router-dom';

import agent from './agent';
import BookForm from './BookForm';

class DetailBook extends Component {
  handleSubmit = ({ judul, deskripsi }) => {
    console.log(this.props);
    agent.put(`/books/${this.props.match.params.id}`, {
      judul,
      deskripsi,
    }).then(() => {
      this.props.history.push('/');
    })
  }
  handleDelete = () => {
    agent.delete(`/books/${this.props.match.params.id}`)
      .then(() => {
        this.props.history.push('/');
      });
  }
  render() {
    return (
      <div>
        <BookForm onSubmit={this.handleSubmit} submitText="Edit"/>
        <button className="btn" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default withRouter(DetailBook);
