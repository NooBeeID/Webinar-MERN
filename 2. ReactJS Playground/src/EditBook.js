import { Component } from "react";
import { withRouter } from 'react-router-dom'

import agent from './utils/agent';

class EditBook extends Component {
    state = {
        judul: '',
        pengarang: '',
        deskripsi: '',
        tahun_terbit: 2021,
    }
    componentDidMount() {
        const { match } = this.props;
        agent.get(`/buku/${match.params.id}`)
            .then(({ data }) => {
                this.setState({
                    judul: data.judul,
                    pengarang: data.pengarang,
                    deskripsi: data.deskripsi,
                    tahun_terbit: data.tahun_terbit,
                });
            })
    }
    onChange = name => evt => this.setState({ [name]: evt.target.value });
    editCurrent = (evt) => {
        evt.preventDefault();
        const { match, history } = this.props;
        const { judul, pengarang, deskripsi, tahun_terbit } = this.state;
        agent.put(`/buku/${match.params.id}`, {
            judul,
            pengarang,
            deskripsi,
            tahun_terbit,
        })
            .then(() => {
                history.push('/');
            });
    }
    deleteCurrent = (evt) => {
        evt.preventDefault();
        const { match, history } = this.props;
        agent.delete(`/buku/${match.params.id}`)
            .then(() => {
                history.push('/');
            });
    }
    render() {
        const { judul, pengarang, tahun_terbit, deskripsi } = this.state
        return (
            <form onSubmit={this.editCurrent}>
                <div className="form-control _title">
                    <label htmlFor="judul">Judul</label>
                    <input
                        id="judul"
                        name="judul"
                        placeholder="Judul buku"
                        value={judul}
                        onChange={this.onChange('judul')}
                    />
                </div>
                <div className="split-input">
                    <div className="form-control _description">
                        <label htmlFor="deskripsi">Deskripsi</label>
                        <textarea
                            rows="10"
                            onChange={this.onChange('deskripsi')}
                            id="deskripsi"
                            value={deskripsi}
                        >
                            {deskripsi}
                        </textarea>
                    </div>
                    <div className="box">
                        <div className="form-control">
                            <label htmlFor="pengarang">Pengarang</label>
                            <input
                                id="pengarang"
                                name="pengarang"
                                value={pengarang}
                                onChange={this.onChange('pengarang')}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="tahun_terbit">Tahun terbit</label>
                            <select
                                id="tahun_terbit"
                                value={tahun_terbit}
                                onChange={this.onChange('tahun_terbit')}
                            >
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
                        Submit
                    </button>
                    <button className="btn" onClick={this.deleteCurrent}>
                        Delete
                    </button>
                </div>
            </form>
        );
    }
}

export default withRouter(EditBook);