import React, { Component } from "react";
import "./search.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAlbums, clearAlbums } from "../../store/actions/albums";
import { editLastSearch } from "../../store/actions/search";
import { meta } from "../../meta";
import $ from "jquery";

//  Search bar used to trigger requests to iTunes's API
class Search extends Component {
    static propTypes = {
        fetchAlbums: PropTypes.func.isRequired,
        clearAlbums: PropTypes.func.isRequired,
        editLastSearch: PropTypes.func.isRequired
    };

    componentDidMount() {
        //  Removes css animation class on completion
        $(".progress-bar").on(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function() {
                $(".progress-bar").removeClass("animate-progress-bar");
            }
        );
    }

    handleSubmit = event => {
        this.search(this.refs.query.value);
        if (meta.debug) console.log("Search input was submited..");
        this.triggerProgressBar();
    };

    handleChange = event => {
        //    Auto search disabled to prevent from spamming iTunes's servers
        //    and risking a temporary or permanent ban on their side
        /*

        this.search(this.refs.query.value);
        if (meta.debug) console.log('Search input has changed..'); 

        */
    };

    handleKeyUp = event => {
        if (meta.debug) console.log("Search input has changed..");

        if (event.keyCode === 13) {
            //Enter
            //trigger
            this.search(this.refs.query.value);
            if (meta.debug) console.log("Search input was submited..");

            this.triggerProgressBar();
        } else if (event.keyCode === 8) {
            //Backspace
            //reset search
            this.clear();
            if (meta.debug) console.log("Search input was cleared..");
        }
    };

    //  Triggers the animation of the progress bar
    triggerProgressBar() {
        $(".progress-bar").addClass("animate-progress-bar");
    }

    //  Formats the input to be used with the REST API
    //  Used in 'search(input)' below
    formatSearch(input = "") {
        let output = input;

        const regexSpecialChar = /\W/g;
        const regexMultipleSpace = /\s\s+/g;
        const regexSpace = / /g;

        output = output
            .replace(regexSpecialChar, " ")
            .replace(regexMultipleSpace, " ")
            .trim()
            .replace(regexSpace, "+")
            .toLowerCase();

        if (meta.debug) console.log("Formated Search: " + output);

        return output;
    }

    //  Triggers a request to iTunes's API
    //  Examples:
    //      search("Daft Punk") will request the albums related to 'Daft Punk'
    search(input = "") {
        this.clear();
        const formatedInput = this.formatSearch(input);
        this.props.fetchAlbums(formatedInput);
        this.props.editLastSearch(input);
    }

    //  Clears the last results
    clear() {
        this.props.clearAlbums();
        this.props.editLastSearch("");
    }

    render() {
        return (
            <div className="container-fluid" id="search">
                <div className="row">
                    <div id="title">
                        Album Explorer{" "}
                        <span id="subtitle">- powered by iTunes</span>
                    </div>
                </div>
                <div className="row" id="search-section">
                    <div className="col-md-10 col-sm-10 col-xs-9">
                        <form autoComplete="off" id="search-input-wrapper">
                            <input
                                autoComplete="off"
                                name="hidden"
                                type="text"
                                style={{ display: "none" }}
                            />
                            <input
                                ref="query"
                                type="text"
                                placeholder="Search for an Artist.."
                                name="fname"
                                id="search-input"
                                onKeyUp={this.handleKeyUp}
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <div
                        className="col-md-2 col-sm-2 col-xs-3"
                        id="submit-search-wrapper"
                    >
                        <button id="submit-search" onClick={this.handleSubmit}>
                            <div id="search-icon" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const dispatchToProps = dispatch => ({
    fetchAlbums: artist => dispatch(fetchAlbums(artist)),
    clearAlbums: () => dispatch(clearAlbums()),
    editLastSearch: artist => dispatch(editLastSearch(artist))
});

export default connect(
    mapStateToProps,
    dispatchToProps
)(Search);
