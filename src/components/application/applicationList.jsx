import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Loader } from "semantic-ui-react";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchApplications } from "../../redux/actions";

const MAIN_CLASS = "ApplicationList";

class ApplicationList extends React.Component {
  componentDidMount() {
    this.props.handleFetchApplications();
  }

  renderApplicationList() {
    return this.props.applicationsList.map((program, index) => {
      return (
        <tr key={program.id}>
          <td className={`${MAIN_CLASS}-id`}>{index}</td>
          <td>{program.programSlug}</td>
          <td>{program.candidateEmail}</td>
          <td>{program.programCapacity}</td>
          <td>{program.programSchedule}</td>
          <td>{program.applicationStatus}</td>
          <td>
            <div className={`${MAIN_CLASS}-description`}>
              <div style={{ display: "inline-block" }}>
                <span>
                  {`${program.personalStatement.substring(0, 50)} ...`}{" "}
                </span>
              </div>
              <PopupIcon content={program.personalStatement} icon={"eye"} />
            </div>
          </td>
          <td>{program.qualityScore}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-intro`}>
          <h2 className="ui dividing user-contro">Browse Application</h2>
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
              <th className={`${MAIN_CLASS}-table-title`}>
                <i className="envelope icon" /> ID
              </th>
              <th className={`${MAIN_CLASS}-name`}>Application Name</th>
              <th className={`${MAIN_CLASS}-student-email`}>Student Email</th>
              <th className={`${MAIN_CLASS}-capacity`}>Capacity</th>
              <th className={`${MAIN_CLASS}-program-schedule`}>
                Program Schedule
              </th>
              <th className={`${MAIN_CLASS}-application-status`}>
                Application Status
              </th>
              <th className={`${MAIN_CLASS}-program-description`}>
                Program Description
              </th>
              <th className={`${MAIN_CLASS}-quality-score`}>Quality Score</th>
            </tr>
            {this.props.applicationsList.length > 0 ? (
              this.renderApplicationList()
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
    applicationsList: state.applications.data
  };
};

ApplicationList.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default connect(mapStateToProps, {
  handleFetchApplications: fetchApplications
})(ApplicationList);
