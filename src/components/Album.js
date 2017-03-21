import React from 'react';
import {Link} from 'react-router'

export default class Album extends React.Component{
	constructor(props){
		super(props);
		this.handleClickImage = this.handleClickImage.bind(this);
	}
	handleClickImage(e){
		this.props.onClick(this.props.itemId);
		$(e.target).parent().css("width", "43%");
		$(e.target).parent().siblings().css("display", "none");		
		$('.playList').css("display", "block");		
	}
	render(){
		return(
			<div className="myAlbum" key={this.props.index} onClick={this.handleClickImage}>
    				<img alt="This is the description"
    					src={this.props.source}
    					className="img-responsive album-image"
    				/>

    		</div>    		
		)
	}
}
