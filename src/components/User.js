import React, {Component} from "react";

/**
 * Our user page
 * Displays the user's information
 */
export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfile: undefined,
      loading: true
    };
  }

  _getInfoUser() {
    var _this = this;
    $.ajax({
      url: "https://api.spotify.com/v1/me/",
      type: "GET",
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', `Bearer ${_this.props.params.accessToken}`);
      },
      success: function(data) {
        _this.setState({userProfile: data})
      }
    });

  }

  componentDidMount() {
    const {params} = this.props;
    const {accessToken, refreshToken} = params;
    this._getInfoUser();
  }

  /** Render the user's info */
  render() {
    const userProfile = this.state.userProfile;

    if (userProfile) {
      var {display_name, images, id, email, external_urls, href, country, product } = userProfile;
      var imageUrl = images[0] ? images[0].url : "";
    }

    return (
      <div className="user">
        <h2>{`Logged in as ${display_name}`}</h2>
        <div className="user-content">
          <img src={imageUrl}/>
          <ul>
            <li><span>Display name</span><span>{display_name}</span></li>
            <li><span>Id</span><span>{id}</span></li>
            <li><span>Email</span><span>{email}</span></li>
            <li><span>Link</span><span><a href={href}>{href}</a></span></li>
            <li><span>Profile Image</span><span><a href={imageUrl}>{imageUrl}</a></span></li>
            <li><span>Country</span><span>{country}</span></li>
            <li><span>Product</span><span>{product}</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
