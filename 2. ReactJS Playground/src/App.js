import './App.css'
import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Books from './Books';
import AddBook from './AddBook';
import EditBook from './EditBook';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" className="main-heading">Manajemen Buku</Link>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Link to="/add-book" className="btn">Tambah Buku</Link>
              <br />
              <hr />
              <Books />
            </Route>
            <Route exact path="/add-book">
              <AddBook />
            </Route>
            <Route path="/:id">
              <EditBook />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
