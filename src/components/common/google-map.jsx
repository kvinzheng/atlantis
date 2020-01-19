import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
      console.log('this.props', this.props)
    const {
      center: { lat, lng }
    } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div>
      <div></div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBf6otTGdU41Hyu44Ed3l676m0bN3eLSH8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default SimpleMap;
