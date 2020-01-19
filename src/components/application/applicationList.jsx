import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchApplications,fetchApplication } from "../../redux/actions";

const MAIN_CLASS = "ApplicationList";

const colorConfig = {
  pending: "orange",
  accepted: "green",
  rejected: "red"
};
class ApplicationList extends React.Component {
  componentDidMount() {
    this.props.handleFetchApplications();
  }

  renderApplicationList() {
    return this.props.applicationsList.map((application, index) => {
      return (
        <tr key={application.id}>
          <td>
          <Button 
              style={{float: "left"}}
              icon="file text"
              size="medium"
              color="blue"
              onClick={() => {
                this.props.handleFetchApplication(application.id);
                this.props.history.push(`/application/${application.id}`);
              }}
            />
               <span>{application.programSlug}</span></td>
          <td>{application.candidateEmail}</td>
          <td>{application.programCapacity}</td>
          <td>{application.programSchedule}</td>
          <td>
            <span style={{ color: colorConfig[application.applicationStatus] }}>
              {application.applicationStatus}
            </span>
          </td>
          <td>
            <div className={`${MAIN_CLASS}-description`}>
              <div style={{ display: "inline-block" }}>
                <PopupIcon content={application.personalStatement} icon={"eye"} />
              </div>
            </div>
          </td>
          <td>{application.qualityScore}</td>
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
  handleFetchApplications: fetchApplications,
  handleFetchApplication: fetchApplication
})(ApplicationList);
