import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import ApplicationCard from "../common/application-card";
import { fetchApplication } from "../../redux/actions";

const MAIN_CLASS = "ApplicationDetail";


class ApplicationDetail extends React.Component {
  componentDidMount() {
    const applicationId = this.props.location.pathname.split("/")[2];
    this.props.handleFetchApplication(applicationId);
  }
  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
        <ApplicationCard {...this.props.application} />
        </div>
        <div className={`${MAIN_CLASS}-company-location`}>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    application: state.application.data
  };
};

ApplicationDetail.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, { handleFetchApplication: fetchApplication })(ApplicationDetail)
);
