import React from 'react';
import {Link} from 'react-router'

export default class Album extends React.Component{
	constructor(props){
		super(props);
		this.handleLocalClickOnTrackSelected = this.handleLocalClickOnTrackSelected.bind(this);
	}
	handleLocalClickOnTrackSelected(e){		
		console.log("here we are");
		this.props.onTrack(this.props.preview_url);
	}
	render(){
		return(			
    			<li className="list-group-item">
    				<button className="track-button" onClick={this.handleLocalClickOnTrackSelected}>
    					{this.props.trackNumber}. {this.props.name}
    				</button>
    			</li>
    		
		)
	}
}
