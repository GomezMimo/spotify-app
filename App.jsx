import React from 'react';
import $ from 'jquery';
import SearchBar from'./components/SearchBar.jsx';
import AlbumImage from'./components/Album.jsx';
const SPOTIFY_URL = "https://api.spotify.com/v1/search?q=";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchRequest: '',
			albums: []
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnEnter = this.handleOnEnter.bind(this);
		this.makeGroupOfAlbums = this.makeGroupOfAlbums.bind(this);
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

    render() {
    	var renderAlbums = this.state.albums.map(function(item, index){
    		return(
    			<AlbumImage className='myAlbum' key={index} source={item.images[0].url} />
    		)
    	})
       return (
          <div className='container'> 
          	<h1>What is your favorite artist?</h1>         	
          	<SearchBar
          		onChange={this.handleOnChange} 
          		value={this.state.searchQuery}
          		onKeyPress={this.handleOnEnter}/>
           	{renderAlbums}
          </div>
       );
    }
}

export default App;