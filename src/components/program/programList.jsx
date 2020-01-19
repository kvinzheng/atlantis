import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchPrograms } from "../../redux/actions";

const MAIN_CLASS = "ProgramList";

class ProgramList extends React.Component {
  componentWillMount() {
    this.props.handleFetchPrograms();
  }

  renderProgramList() {
    return this.props.programsList.map((program, index) => {
      return (
        <tr key={program.id}>
          <td className={`${MAIN_CLASS}-id`}>{index}</td>
          <td>
            <Card
              className={`${MAIN_CLASS}-img`}
              raised
              image={program.companyLogo}
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
            <div style={{ display: "inline-block" }}>
              <span>{program.programDescription.substring(0, 50)} </span>
            </div>
            <PopupIcon
              content={program.preferMajors.join(", ")}
              icon={"eye"}
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
          <h2 className="ui dividing user-contro">Browse Applications</h2>
        </div>
        <table className={`${MAIN_CLASS}-table`}>
          <thead>
            <tr>
              <th colSpan="7">
                <SearchBar type={`${MAIN_CLASS}`}/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className={`${MAIN_CLASS}-table-title`}
              >
                <i className="envelope icon" /> ID
              </th>
              <th className={`${MAIN_CLASS}-company-logo`}>
                Company Logo
              </th>
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
            {this.renderProgramList()}
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

export default connect(mapStateToProps, { handleFetchPrograms: fetchPrograms })(
  ProgramList
);
