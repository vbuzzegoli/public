import React, { Component } from 'react';
import './results.css';
import Album from '../Album/album.js';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { clearAlbums } from '../../store/actions/albums';
import { editLastSearch } from '../../store/actions/search';
import { meta } from '../../meta';
import UUID from 'uuid/v4';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//  Components used to display the results fetched via the search bar
//  Displays a grid of albums fetched from iTunes's API
class Results extends Component {

    static propTypes = {
        clearAlbums: PropTypes.func.isRequired,
        editLastSearch: PropTypes.func.isRequired,
        albums: PropTypes.array.isRequired,
        lastSearch: PropTypes.string.isRequired
    }

    static defaultProps = {
        albums: [],
        lastSearch: ""
    }

    handleClear = (event) => {
        this.clearSearch();
    }

    //  Clears the current results
    clearSearch(){
        this.props.clearAlbums();
        this.props.editLastSearch("");
        if (meta.debug) { console.log('Results cleared..'); }
        
    }

    render() {
        if (meta.debug) { console.log(this.props.albums); }
        return ( 
            <div className="container-fluid" id="results">
                <div className="row">
                    {(this.props.albums.length !== 0) && 
                        <div className="main-info" id="info">
                            Results found for "<span id="artist-name">{this.props.lastSearch}</span>"
                            <div id="clear-wrapper"><button id="clear" onClick={this.handleClear}><div id="x">x</div></button></div>
                        </div>
                    }
                    {(this.props.albums.length === 0) && 
                        <div className="main-info" id="no-results">
                            <div id="no-results-primary">
                                No result to show at the moment
                            </div>
                            <div id="no-results-secondary">
                                Check your internet connection and try looking for an artist in the search bar
                            </div>
                        </div>
                    }
                </div>
                <div className="row" id="albums-container">
                    <ReactCSSTransitionGroup 
                        transitionName="slide-and-fade" 
                        transitionEnterTimeout={300} 
                        transitionLeaveTimeout={300} >
                        { this.props.albums.map(album => {
                            return (
                                <Album data={album} key={UUID()}/>
                            );
                        })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    albums: state.searchResults.albums,
    lastSearch: state.searchInfo.lastSearch
})

const dispatchToProps = (dispatch) => ({
    clearAlbums: () => dispatch(clearAlbums()),
    editLastSearch: (artist) => dispatch(editLastSearch(artist))
})

export default connect(mapStateToProps, dispatchToProps)(Results);