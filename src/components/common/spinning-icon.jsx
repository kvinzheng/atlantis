import React from "react";
import PropTypes from "prop-types";

const SpinningIcon = ({ message }) => {
  return (
    <div className="icon-detail-loading">
      <div className="icon-detail-popdiv">
        <div className="ui active dimmer">
          <div className="ui massive text loader">{message}</div>
        </div>
      </div>
    </div>
  );
};

SpinningIcon.propTypes = {
  message: PropTypes.string
};

SpinningIcon.defaultProps = {
  message: "Loading"
};

export default SpinningIcon;
