import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Loader, Popup } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";
import Card from "../common/card";

import { fetchProgram } from "../../redux/actions";

const MAIN_CLASS = "ProgramDetail";

class ProgramDetail extends React.Component {
  componentDidMount(){

    const programId = this.props.location.pathname.split("/")[2];

    this.props.handleFetchProgram(programId);
  }
  render() {
    console.log('program',this.props.program.companyLogo)
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-company-info`}><Card {...this.props} /></div>
        <div className={`${MAIN_CLASS}-company-location`}></div>
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
