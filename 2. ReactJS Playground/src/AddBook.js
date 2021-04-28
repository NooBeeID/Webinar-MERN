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
                <div className="form-control _title">
                    <label htmlFor="judul">Judul</label>
                    <input id="judul" name="judul" placeholder="Judul buku" />
                </div>
                <div className="split-input">
                    <div className="form-control _description">
                        <label htmlFor="deskripsi">Deskripsi</label>
                        <textarea rows="10" id="deskripsi"></textarea>
                    </div>
                    <div className="box">
                        <div className="form-control">
                            <label htmlFor="pengarang">Pengarang</label>
                            <input id="pengarang" name="pengarang" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="tahun_terbit">Tahun terbit</label>
                            <select id="tahun_terbit">
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                            </select>
                        </div>
                    </div>
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