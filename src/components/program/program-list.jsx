import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Loader, Popup } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchPrograms, fetchProgram } from "../../redux/actions";

const MAIN_CLASS = "ProgramList";

class ProgramList extends React.Component {
  componentDidMount() {
    this.props.handleFetchPrograms();
  }

  renderProgramList() {
    return this.props.programsList.map((program, index) => {
      return (
        <tr key={program.id}>
          <td>
            <Popup
              content="Click me for company details"
              trigger={
                <Card
                  onClick={() => {
                    this.props.handleFetchProgram(program.id);
                    this.props.history.push(`/program/${program.id}`);
                  }}
                  className={`${MAIN_CLASS}-img`}
                  raised
                  image={program.companyLogo}
                />
              }
            />
          </td>
          <td>
            <a
              href={`${program.companyWebsite}`}
              className={`${MAIN_CLASS}-company-link`}
            >
              {program.companyName}
            </a>
          </td>
          <td>{program.contactEmail}</td>
          <td>{program.contactNumber}</td>
          <td>
            <div className={`${MAIN_CLASS}-program-description-content`}>
              <PopupIcon
                content={program.preferMajors.join(", ")}
                icon={"eye"}
                size={"huge"}
                cssName="eye"
              />
            </div>
          </td>
          <td>
            <PopupIcon
              content={program.preferMajors.join(", ")}
              icon={"handshake"}
              cssName={"handshake-icon"}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-intro`}>
          <h2 className="ui dividing user-contro">Browse Programs</h2>
        </div>
        <table className={`${MAIN_CLASS}-table`}>
          <thead>
            <tr>
              <th colSpan="7">
                <SearchBar type={`${MAIN_CLASS}`} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={`${MAIN_CLASS}-company-logo`}>Company Logo</th>
              <th className={`${MAIN_CLASS}-company-name`}>Company Name</th>
              <th className={`${MAIN_CLASS}-program-description`}>
                Program Description
              </th>
              <th className={`${MAIN_CLASS}-phone-number`}>Phone Numbers</th>
              <th className={`${MAIN_CLASS}-program-description`}>
                Program Description
              </th>
              <th className={`${MAIN_CLASS}-preferred-majors`}>
                Prefered Major
              </th>
            </tr>
            {this.props.programsList.length > 0 ? (
              this.renderProgramList()
            ) : (
              <tr>
                <td colSpan="7">
                  <Loader active />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    programsList: state.programs.data
  };
};

ProgramList.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, {
    handleFetchPrograms: fetchPrograms,
    handleFetchProgram: fetchProgram
  })(ProgramList)
);
