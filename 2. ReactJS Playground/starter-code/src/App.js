import './App.css'
import { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Books from './Books';
import AddBook from './AddBook';
import DetailBook from './DetailBook';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" className="main-heading">Aplikasi buku</Link>
        <div className="container">
          <Switch>
            <Route exact path="/">
                <Link to="/add-book" className="btn">Tambah Buku</Link>
                <hr />
                <Books />
            </Route>
            <Route path="/add-book">
              <AddBook />
            </Route>
            <Route path="/:id">
              <DetailBook />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
