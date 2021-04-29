import { Component } from "react";
import { withRouter } from 'react-router-dom'
import agent from './utils/agent';

class AddBook extends Component {
    onSubmit = (evt) => {
        evt.preventDefault();
        const { judul, pengarang, deskripsi, tahun_terbit } = evt.target.elements;
        agent.post('/buku/', {
            judul: judul.value,
            pengarang: pengarang.value,
            deskripsi: deskripsi.value,
            tahun_terbit: tahun_terbit.value,
        }).then(() => {
            this.props.history.push('/');
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

export default withRouter(AddBook);