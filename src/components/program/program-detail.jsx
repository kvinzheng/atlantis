import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import Card from "../common/card";
import { Card as UICard } from "semantic-ui-react";

import { fetchProgram } from "../../redux/actions";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MAIN_CLASS = "ProgramDetail";
const API_KEY = "AIzaSyBf6otTGdU41Hyu44Ed3l676m0bN3eLSH8";

class ProgramDetail extends React.Component {
  componentDidMount() {
    const programId = this.props.location.pathname.split("/")[2];

    this.props.handleFetchProgram(programId);
  }
  render() {
    const location = this.props.program.programLocation;
    let locationElement = "";

    if (location) {
      const { coordinates, street, city, state, postalCode } = location;
      const { lat, lng } = coordinates;
      const description = `${street}, ${city}, ${state} ${postalCode}`;
      const meta = `lat: ${coordinates.lat}, lng: ${coordinates.lng}`;
      locationElement = (
        <div
          className={`${MAIN_CLASS}`}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className={`${MAIN_CLASS}-company-info`} style={{width: 'auto'}}>
            <UICard
              header={city}
              meta={meta}
              description={description}
              style={{ width: "100%" }}
            />
          </div>
          <div
            className={`${MAIN_CLASS}-google-map-info`}
            style={{ height: "500px", width: "100%" }}
          >
            <LoadScript googleMapsApiKey={API_KEY}>
              <GoogleMap
                mapContainerStyle={{ height: 300, width: "100%" }}
                zoom={15}
                center={{ lat, lng }}
              >
                <Marker position={{ lat, lng }} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      );
    }

    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
          {location && <Card {...this.props} />}
        </div>
        <div className={`${MAIN_CLASS}-company-location`}>
          {locationElement}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    program: state.program.data
  };
};

ProgramDetail.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, { handleFetchProgram: fetchProgram })(ProgramDetail)
);
