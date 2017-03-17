import React from 'react';

export default class Album extends React.Component{
	render(){
		return(
			<div className='myAlbum' key={this.props.index}>
    				<img 
    					src={this.props.source}
    					className="img-responsive album-image"
    				/>    				    								
    		</div>
		)
	}
}