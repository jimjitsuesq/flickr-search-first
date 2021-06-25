import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import './App.css';
import './css/index.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import JiuJitsu from './Components/JiuJitsu';
import SearchForm from './Components/SearchForm.js';
import NotFound from './Components/NotFound.js';
// import searchText from './Components/SearchForm.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      images: [],
      loading : true,
      searchTextParent: ''
    };
  }

  componentDidMount() {
    this.performSearch(this.state.searchTextParent);
    // console.log(this.state.searchTextParent)
  }

  getSearchString = (str) => {
    this.setState({
      searchTextParent: str
    })
    this.performSearch(str)
    // console.log(this.state.searchTextParent)
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response)
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    
    console.log(this.state.images);
    return (
      <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.getSearchString} />
          
          <Nav onClick={this.getSearchString} />

        <div className="photo-container">
          <h2>Results</h2>
            <Switch>
              <Route path="/JiuJitsu" />
              <Route path="/wrestling" />
              <Route path="/mma" />
              <Route path="/NotFound" component={NotFound} />
            </Switch>
            <PhotoList data={this.state.images} />
        </div>

    </div>
    </BrowserRouter>
    );
    
  }
}
