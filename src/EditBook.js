import axios from "axios";
import { Component } from "react";
import { withRouter } from 'react-router-dom'

class EditBook extends Component {
    state = {
        judul: '',
        pengarang: '',
    }
    componentDidMount() {
        const { match } = this.props;
        axios.get(`https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53/buku/${match.params.id}`)
            .then(({ data }) => {
                this.setState({
                    judul: data.judul,
                    pengarang: data.pengarang,
                });
            })
    }
    onChange = name => evt => this.setState({ [name]: evt.target.value });
    editCurrent = (evt) => {
        evt.preventDefault();
        const { match, history } = this.props;
        const { judul, pengarang } = this.state;
        axios.put(`https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53/buku/${match.params.id}`, {
            judul,
            pengarang,
        })
            .then(() => {
                history.push('/');
            });
    }
    deleteCurrent = (evt) => {
        evt.preventDefault();
        const { match, history } = this.props;
        axios.delete(`https://crudcrud.com/api/69283d16b0d24823b0ee6bf9a38a4c53/buku/${match.params.id}`)
            .then(() => {
                history.push('/');
            });
    }
    render() {
        const { judul, pengarang } = this.state
        return (
            <form onSubmit={this.editCurrent}>
                <div className="form-control">
                    <label htmlFor="judul">Judul</label>
                    <input
                        id="judul"
                        name="judul"
                        value={judul}
                        onChange={this.onChange('judul')}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="pengarang">Pengarang</label>
                    <input
                        id="pengarang"
                        name="pengarang"
                        value={pengarang}
                        onChange={this.onChange('pengarang')}
                    />
                </div>
                <div className="button-row">
                    <button type="submit" className="btn btn-success">
                        Edit
                    </button>
                    <button className="btn btn-fail" onClick={this.deleteCurrent}>
                        Hapus
                    </button>
                </div>
            </form>
        );
    }
}

export default withRouter(EditBook);