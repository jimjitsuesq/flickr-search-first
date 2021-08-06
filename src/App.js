// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import apiKey from './config.js'
import './App.css';
import './css/index.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm.js';
import NotFound from './Components/NotFound.js';
import Home from './Components/Home.js';

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentLocation, setCurrentLocation] = useState('')
  const [queryText, setQueryText] = useState('')

/**
 * The function that performs the photo search
 * @param {string} query The string sent to Flickr to search
 */
const performSearch = async (query) => {
  try {
    const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=interestingness-asc&format=json&nojsoncallback=1`)
    setImages(response.data.photos.photo)
    setLoading(false)
    setCurrentLocation(window.location.pathname)
    setQueryText(query)
  } catch (error) {
      console.log('Error fetching and parsing data', error);
  }
}

/**
 * Resets the loading state after search is performed
 */
 function resetLoadingState () {
  if (loading === false) {
    setLoading(true)
  }
}

/**
 * Modifies the window location passed by the calling component used to get 
 * the search string.  
 * @param {string} str The value a component passes to the performSearch 
 * function to perform the search 
 */
 const getSearchString = (str) => {
  str = (str).slice(8)
  performSearch(str)
  resetLoadingState()
}

/**
 * Handles the initial loading of the page, as well as if a user types a URL
 * directly into browser address bar
 */
  // componentDidMount() {
  //   if (this.state.currentLocation !== window.location.pathname) {
  //       this.getSearchString(window.location.pathname)
  //     } 
  // }
useEffect(() => {
  if (currentLocation !== window.location.pathname) {
    getSearchString(window.location.pathname)
  }
  window.onpopstate = () => {
    getSearchString(window.location.pathname)
  }
})
 
  return (
    <div className="container">
      <SearchForm onSearch={getSearchString} />
      <Nav onNavClick={getSearchString} />
      <div className="photo-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search/" render={(props) => <PhotoList loading={loading} query={queryText} data={images} /> } />
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

export default App;
