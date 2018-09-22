import React, { Component } from "react";
import "./album.css";
import $ from "jquery";

//  Component used by 'Results'.
//  Displays the information relative to a given album passed as a prop named 'data'.
//  'data' must conform to the structure of the items received using iTunes's API.
//  For more information about this structure please check out Apple's documentation below :
//      https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
class Album extends Component {
	componentDidMount() {
		// force aspect ratio 1:1
		const width = $(".album-cover-wrapper").css("width");
		$(".album-cover-wrapper").css("height", width);
		$(".album-cover").css("height", width);
	}

	render() {
		const cover = this.props.data.artworkUrl100;
		const name = this.props.data.collectionName;
		const artist = this.props.data.artistName;
		const year = `${this.props.data.releaseDate}`.substring(0, 4);

		return (
			<div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 album-wrapper">
				<div className="album">
					<div className="album-cover-wrapper">
						<img
							className="album-cover"
							src={cover}
							alt="Loading.."
						/>
					</div>
					<div className="album-name">{name}</div>
					<div className="album-subinfo">
						<div className="album-artist">{artist}</div>
						<div className="album-year">{year}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Album;
