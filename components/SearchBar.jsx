import React from 'react';

export default class SearchBar extends React.Component {
	render(){
		return(
			<input
          		placeholder='Search an artist'
				className="form-control" 
				type="text" 
				onChange={this.props.onChange}
				value={this.props.value} 
				onKeyPress={this.props.onKeyPress}
			/>
		)
	}
}