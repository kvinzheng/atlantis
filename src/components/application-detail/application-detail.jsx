import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import Card from "../common/card";
import { fetchApplication } from "../../redux/actions";

const MAIN_CLASS = "ApplicationDetail";


class ApplicationDetail extends React.Component {
  componentDidMount() {
    const applicationId = this.props.location.pathname.split("/")[2];
    this.props.handleFetchApplication(applicationId);
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}>
        <Card {...this.props} />
        </div>
        <div className={`${MAIN_CLASS}-company-location`}>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    application: state.application
  };
};

ApplicationDetail.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, { handleFetchApplication: fetchApplication })(ApplicationDetail)
);
