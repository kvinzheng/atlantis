import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Card } from "semantic-ui-react";

const CardExampleLinkCard = ({ header, meta, description }) => (
  <Card header={header} meta={meta} description={description} />
);

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
    zoom: 11
  };

  render() {
    const {
      center: { lat, lng },
      city,
      state,
      street,
      postalCode,
      coordinates
    } = this.props;

    const description = `${street}, ${city}, ${state} ${postalCode}`;
    const meta = `lag: ${coordinates.lag} ${coordinates.lng}`;
    return (
      // Important! Always set the container height explicitly
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
          <CardExampleLinkCard
            header={city}
            meta={meta}
            description={description}
          />
        </div>
        <div className={`${MAIN_CLASS}-google-map-info`} style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBf6otTGdU41Hyu44Ed3l676m0bN3eLSH8"
            }}
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

export default GoogleMap;
