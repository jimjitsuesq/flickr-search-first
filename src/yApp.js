import React, { Component, useState, useEffect } from 'react';
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
import { useFetch } from './useFetch.js';

const App = () => {
  const [{ data, loading, error }, fetchData]

  /* const []
    this.state = {
      images: [],
      loading : true,
      queryText: 'cat',

    };
  }

  didSearchUpdate = (str) => {
    const currentRoute = `${window.location.pathname}`
    if ( currentRoute !== this.state.queryText ) {
      this.setState({queryText: currentRoute})
    }
    
  }

  componentDidMount() {    
    // this.setState({queryText: currentRoute})
    this.performSearch(this.state.queryText)
    console.log(this.state.queryText)
  }

  componentDidUpdate() {
    if (this.didSearchUpdate) {
      // this.performSearch(this.state.queryText)
      console.log(this.state.queryText)
  }}

  getSearchString = (str) => {
    this.setState({
      queryText: str
    })
    this.performSearch(str)
  } */
    useFetch()
    // console.log({data})
    return (
        <BrowserRouter>
        <div className="container">
            {/* <SearchForm onSearch={this.getSearchString} /> */}
            {/* <Nav onNavClick={this.getSearchString} /> */}
            <div className="photo-container">
            
            <h2>Results</h2>
                {/* <Switch>
                <Route exact path="/"/>
                <Route exact path="/JiuJitsu">
                    <Redirect to="/?search=JiuJitsu" component={SearchResults} />
                </Route>
                <Route exact path="/wrestling">
                    <Redirect to="/?search=wrestling" />
                </Route>
                <Route exact path="/MixedMartialArts">
                    <Redirect to="/?search=MixedMartialArts" />
                </Route>
                <Route path="/search/" component={SearchResults} />
                <Route path="/NotFound" component={NotFound} />
                </Switch> */}
                {/* <PhotoList data={data.photos.photo} /> */}
            </div>

        </div>
    </BrowserRouter>
    );
}

export default App;
