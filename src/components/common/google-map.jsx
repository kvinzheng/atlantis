import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

const CardExampleLinkCard = ({ header, meta, description }) => (
  <Card header={header} meta={meta} description={description} />
);

CardExampleLinkCard.propTypes = {
    header: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MAIN_CLASS = "GoogleMap";

class GoogleMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },    
    coordinates: {
      lat: 59.95,
      lng: 30.33
    },   
    zoom: 9,
  };

  render() {
    const {
      city,
      state,
      street,
      postalCode,
      coordinates,
      center
    } = this.props;

    const description = `${street}, ${city}, ${state} ${postalCode}`;
    const meta = `lat: ${coordinates.lat}, lng: ${coordinates.lng}`;
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
          <CardExampleLinkCard
            header={city}
            meta={meta}
            description={description}
          />
        </div>
        <div className={`${MAIN_CLASS}-google-map-info`} style={{ height: "500px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBf6otTGdU41Hyu44Ed3l676m0bN3eLSH8"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={center}
            zoom={this.props.zoom}
            // hoverDistance={K_SIZE / 2}
          >
            <AnyReactComponent      
            lat={59.955413}
            lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap;