import React, { Component, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
  useLocation
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import './App.css';
import './css/index.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm.js';
import NotFound from './Components/NotFound.js';
import SearchResults from './Components/SearchResults.js';
// import { useFetch } from './useFetch.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      images: [],
      loading : true,
      queryText: '',
      // currentLocation: window.location.pathname
    };
  }

 
  
  didSearchUpdate = (str) => {
    const currentRoute = `${window.location.pathname}`
    if ( currentRoute !== this.state.queryText ) {
      this.setState({queryText: currentRoute})
      
    }
    
  }

  componentDidUpdate() {
    if (this.state.queryText !== window.location.pathname) {
      console.log('componentDidUpdate')
      // let str = (window.location.pathname).slice(8)
      // this.performSearch(str)
      // this.setState({queryText: window.location.pathname})
      this.getSearchString(window.location.pathname)
  }}

  componentDidMount() {
    if (this.state.queryText !== window.location.pathname) {
      console.log('componentDidMount')
      // let str = (window.location.pathname).slice(8)
      // this.performSearch(str)
      // this.setState({queryText: window.location.pathname})
      this.getSearchString(window.location.pathname)
  }}

  /* componentDidMount() {    
    // this.setState({queryText: currentRoute})
    this.performSearch(this.state.queryText)
    console.log(this.state.queryText)
  } */

  getSearchString = (str) => {
    str = (str).slice(8)
    this.performSearch(str)
    // this.setState({queryText: window.location.pathname})
    console.log('getSearchString', str)
    // this.setState({
    //   queryText: str
    // })
    // this.performSearch(str)
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response)
        console.log(this.state.queryText)
        console.log(window.location.pathname)
        console.log(query)
        this.setState({
          images: response.data.photos.photo,
          loading: false,
          queryText: window.location.pathname
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

/*   usePageViews = () => {
    location = useLocation()

    useEffect( () => {
      ga.send(['pageview', location.pathname])
     }, 
     [location]);
  } */

  render() {
    // this.usePageViews() 
    
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.getSearchString} />
            <Nav onNavClick={this.getSearchString} />
            {/* <Nav /> */}
          <div className="photo-container">
          
            <h2>Results</h2>
              <Switch>
                <Route exact path="/"/>
                <Route exact path="/JiuJitsu">
                    <Redirect to="/search/JiuJitsu" />
                </Route>
                <Route exact path="/wrestling">
                    <Redirect to="/search/wrestling" />
                </Route>
                <Route exact path="/MixedMartialArts">
                    <Redirect to="/search/MixedMartialArts" />
                </Route>
                <Route path="/search/" />
                <Route path="/NotFound" component={NotFound} />
              </Switch>
              <PhotoList data={this.state.images} />
          </div>

        </div>
    </BrowserRouter>
    );
    
  }
}
