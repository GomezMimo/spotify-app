import React from 'react';
import AlbumImage from './Album';
import PlayList from './PlayList'
import ReactAudioPlayer from 'react-audio-player';
const SPOTIFY_URL = "https://api.spotify.com/v1/search?q=";
const SPOTIFY_TRACKS_URL = "https://api.spotify.com/v1/albums/";

const initialState = {
	searchRequest: '',
	albums: [], 
	tracks: [],
	trackSelected: ''		
}

class App extends React.Component {
	constructor(props){
		super(props);		
		this.state = {
			searchRequest: '',
			albums: [], 
			tracks: [],
			trackSelected: ''
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnEnter = this.handleOnEnter.bind(this);
		this.makeGroupOfAlbums = this.makeGroupOfAlbums.bind(this);
		this.handleClickAlbum = this.handleClickAlbum.bind(this);
		this.handleClickOnTrackSelected = this.handleClickOnTrackSelected.bind(this);
		this.resetSearchBar = this.resetSearchBar.bind(this);
	}
	handleOnChange(e){
		this.setState({
			searchRequest: e.target.value
		})
	}

	handleOnEnter(e){
		if(e.key === "Enter"){
			this.makeGroupOfAlbums(this.state.searchRequest);
		}
		
	}

	makeGroupOfAlbums(query){
		var that = this;
		$.ajax(SPOTIFY_URL + query + '&type=album').done(function(response){			
			that.setState({
				albums: response.albums.items
			})
		})
	}

	handleClickAlbum(artistId){			
		var that = this;
		$.ajax(SPOTIFY_TRACKS_URL + artistId + '/tracks').done(function(response){
			console.log(response.items)
			that.setState({
				tracks: response.items
			})
		})
	}

	handleClickOnTrackSelected(track){
		this.setState({
			trackSelected: track
		})
	}

	resetSearchBar(){
		console.log("We are here!");		
		// $(e.target).parent().css("width", "43%");
		// $(e.target).parent().siblings().css("display", "none");				
		$('.go-back-albums').siblings().css("display", "inline-block");	
		$('.myAlbum').css("width", "204px");		
		$('.playList').css("display", "none");
		$('.go-back-albums').css("display", "none");	

	}

    render() {
    	var _this = this;
    	var renderAlbums = this.state.albums.map(function(item, index){      		
    		return(    			
	    		<AlbumImage className='myAlbum' key={index} source={item.images[0].url} itemId={item.id} onClick={_this.handleClickAlbum}/>	    			    		
    		)
    	})
    	var renderTracks = this.state.tracks.map(function(item, index){      		
    		return(    			
	    		<PlayList 
	    		className='playList'
	    		key={index}
	    		trackNumber={item.track_number}
	    		preview_url={item.preview_url}
	    		name={item.name} 
	    		onTrack={_this.handleClickOnTrackSelected}/>	    			    		
    		)
    	})
       return (
          <div className='container'> 
          	<h1>Search your artist</h1>         	
          	<input
          		placeholder='Search an artist'
				className="form-control" 
				type="text"  
          		onChange={this.handleOnChange} 
          		value={this.state.searchQuery}
          		onKeyPress={this.handleOnEnter}/>
           	{renderAlbums}           	
           		<ol className=" playList list-group">
           			<h2 className="playListTitle">PlayList</h2>
           			{renderTracks}
           			<ReactAudioPlayer 
           				src={this.state.trackSelected}
           				autoplay 
           			/>           			       			
           		</ol>
           		<div className="go-back-albums">
           			<a onClick={this.resetSearchBar}>Go back to albums</a>           	
           		</div>
          </div>
       );
    }
}

export default App;