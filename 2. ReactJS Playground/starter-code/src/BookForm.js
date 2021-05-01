import { Component } from 'react';

import Button from './Button';

class BookForm extends Component{
  state = {
    judul: '',
    deskripsi: '',
  };
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }
  handleSubmit = () => {
    const { judul, deskripsi } = this.state;
    this.props.onSubmit({ judul, deskripsi });
  }
  render() {
    return (
      <div>
        <div className="form-control">
          <label htmlFor="judul">Judul</label>
          <input
            type="text"
            id="judul"
            onChange={this.handleChange('judul')}
          />
        </div>
        <div className="form-control">
          <label htmlFor="deskripsi">Deskripsi</label>
          <input
            type="text"
            id="deskripsi"
            onChange={this.handleChange('deskripsi')}
          />
        </div>
        <div className="button-row">
          <Button onClick={this.handleSubmit} >{this.props.submitText || 'Tambah'}</Button>
        </div>
      </div>
    );
  }
}

export default BookForm;
