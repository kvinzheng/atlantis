import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "semantic-ui-react";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchStudents } from "../../redux/actions";

const MAIN_CLASS = "StudentList";


class StudentList extends React.Component {
  componentWillMount() {
    this.props.handleFetchStudents();
  }

  renderStudentList() {
    return this.props.studentList.map((student, index) => {
      return (
        <tr key={student.id}>
          <td className={`${MAIN_CLASS}-id`}>{student.id}</td>
          <td>
            <span>{`${student.firstName} ${student.lastName}`}</span>
          </td>
          <td>
          <Icon name={student.gender}/> <span>{student.gender}</span>
          </td>
          <td>{student.school}</td>
          <td>{student.race}</td>
          <td>
            <div className={`${MAIN_CLASS}-program-description-content`}>
            <div style={{ display: "inline-block" }}>
              <span>introduction:</span>
            </div>
            <PopupIcon
              content={student.introduction}
              icon={"eye"}
            />
            </div>
          </td>
          <td>
           <span>{student.race}</span>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-intro`}>
          <h2 className="ui dividing user-contro">Browse Students</h2>
        </div>
        <table className={`${MAIN_CLASS}-table`}>
          <thead>
            <tr>
              <th colSpan="7">
                <SearchBar />
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
                Name
              </th>
              <th className={`${MAIN_CLASS}-company-name`}>Majors</th>
              <th className={`${MAIN_CLASS}-program-description`}>
                gender
              </th>
              <th className={`${MAIN_CLASS}-phone-number`}>School</th>
              <th className={`${MAIN_CLASS}-program-description`}>
                introduction
              </th>
              <th className={`${MAIN_CLASS}-preferred-majors`}>
                gpa
              </th>
            </tr>
            {this.renderStudentList()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    studentList: state.students.data
  };
};

StudentList.propTypes = {
  studentList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default connect(mapStateToProps, { handleFetchStudents: fetchStudents })(
  StudentList
);
