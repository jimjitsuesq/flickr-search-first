import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import './App.css';
import './css/index.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm.js';
import NotFound from './Components/NotFound.js';
import Home from './Components/Home.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      images: [],
      loading : true,
      currentLocation: '',
      queryText: ''
    };
  }
/**
 * Performs a new photo search when the page updates and also handles the back
 * and forward button page updates
 */
  componentDidUpdate() {
    if (this.state.currentLocation !== window.location.pathname) {
      this.getSearchString(window.location.pathname)
    }
    window.onpopstate  = () => {
      this.getSearchString(window.location.pathname)
    } 
  }
/**
 * Handles the initial loading of the page, as well as if a user types a URL
 * directly into browser address bar
 */
  componentDidMount() {
    if (this.state.currentLocation !== window.location.pathname) {
        this.getSearchString(window.location.pathname)
      } 
  }
/**
 * Resets the loading state after search is performed
 */
  resetLoadingState() {
    if (this.state.loading === false) {
      this.setState ({
        loading: true
      })
    }
  }
/**
 * Modifies the window location passed by the calling component used to get 
 * the search string.  
 * @param {string} str The value a component passes to the performSearch 
 * function to perform the search 
 */
  getSearchString = (str) => {
    str = (str).slice(8)
    this.performSearch(str)
    this.resetLoadingState()
  }
/**
 * The function that performs the photo search
 * @param {string} query The string sent to Flickr to search
 */
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=interestingness-asc&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false,
          currentLocation: window.location.pathname,
          queryText: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() { 
    return (
      <div className="container">
        <SearchForm onSearch={this.getSearchString} />
        <Nav onNavClick={this.getSearchString} />
        <div className="photo-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/search/" render={(props) => <PhotoList loading={this.state.loading} query={this.state.queryText} data={this.state.images} /> } />
            <Route path="/search/JiuJitsu" />
            <Route path="/search/wrestling" />
            <Route path="/search/grappling" />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}