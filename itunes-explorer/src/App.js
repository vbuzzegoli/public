import React, { Component } from 'react';
import { Provider } from 'react-redux';
import $ from 'jquery'; //never used for DOM manipulation
import './App.css';
import store from './store';

import Search from './components/Search/search';
import Results from './components/Results/results';

class App extends Component {

  componentDidMount() {
    //when resizing the window, re-adjust the aspect ratio of the albums' covers
    $(window).on('resize', function(){
        //force aspect ratio 1:1
        let width = $('.album-cover-wrapper').css("width");
        $('.album-cover-wrapper').css("height", width);
        $('.album-cover').css("height", width);
    });
  }

  render () {
    return (
      <Provider store={ store }>
        <div className="app">
          <Search className="row" id="app-search"/>
          <Results className="row" id="app-results"/>
        </div>
      </Provider>
    )
  }
}

export default App
