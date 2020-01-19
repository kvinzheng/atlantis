import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import Card from "../common/card";
// import GoogleMapReact from "google-map-react";
import GoogleMapReact from "../common/google-map";
import { fetchProgram } from "../../redux/actions";

const MAIN_CLASS = "ProgramDetail";


class ProgramDetail extends React.Component {
  componentDidMount() {
    const programId = this.props.location.pathname.split("/")[2];

    this.props.handleFetchProgram(programId);
  }
  render() {
    const location = this.props.program.programLocation
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
          <Card {...this.props} />
        </div>
        <div className={`${MAIN_CLASS}-company-location`}>
          <GoogleMapReact {...location} />
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
