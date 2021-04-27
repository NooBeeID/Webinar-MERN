import { Component } from "react";
import axios from 'axios';

class AddBook extends Component {
    onSubmit = (evt) => {
        evt.preventDefault();
        const { judul, pengarang } = evt.target.elements;
        axios.post('https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53/buku/', {
            judul: judul.value,
            pengarang: pengarang.value,
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-control">
                    <label htmlFor="judul">Judul</label>
                    <input id="judul" name="judul" />
                </div>
                <div className="form-control">
                    <label htmlFor="pengarang">Pengarang</label>
                    <input id="pengarang" name="pengarang" />
                </div>
                <div>
                    <button type="submit" className="btn">
                        Tambah
                    </button>
                </div>
            </form>
        );
    }
}

export default AddBook;