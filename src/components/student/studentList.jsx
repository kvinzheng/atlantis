import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "semantic-ui-react";

import SearchBar from "../common/search-bar";
import PopupIcon from "../common/popup-icon";

import { fetchStudents } from "../../redux/actions";

const MAIN_CLASS = "StudentList";

const colorConfig = {
  male: "blue",
  female: "pink",
  trans: "yellow",
  other: "orange"
};
const iconConfig = {
  male: "male",
  female: "female",
  trans: "transgender",
  other: "genderless"
}
class StudentList extends React.Component {
  componentWillMount() {
    this.props.handleFetchStudents();
  }

  renderStudentList() {
    return this.props.studentList.map((student, index) => {
      return (
        <tr key={student.id}>
          <td className={`${MAIN_CLASS}-index`}>{index}</td>
          <td>
            <span>{`${student.firstName} ${student.lastName}`}</span>
          </td>
          <td>
          <Icon name={iconConfig[student.gender]} color={colorConfig[student.gender]}/> <span>{student.gender}</span>
          </td>
          <td>{student.school}</td>
          <td>{student.race}</td>
          <td>
            <div className={`${MAIN_CLASS}-program-description-content`}>
            <div style={{ display: "inline-block" }}>
              <span>{`${student.introduction.substring(0, 50)}...`}</span>
            </div>
            <PopupIcon
              content={student.introduction}
              icon={"eye"}
            />
            </div>
          </td>
          <td>
           <span>{student.gpa}</span>
          </td>
          <td>
           <span>{student.phoneNumber}</span>
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
              <th colSpan="8">
                <SearchBar type={`${MAIN_CLASS}`}/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className={`${MAIN_CLASS}-id`}
              >
                <i className="envelope icon" /> ID
              </th>
              <th className={`${MAIN_CLASS}-name`}>
                Name
              </th>
              <th className={`${MAIN_CLASS}-gender`}>Genders</th>
              <th className={`${MAIN_CLASS}-university`}>
                University
              </th>
              <th className={`${MAIN_CLASS}-race`}>Race</th>
              <th className={`${MAIN_CLASS}-introduction`}>
                Introduction
              </th>
              <th className={`${MAIN_CLASS}-gpa`}>
                GPA
              </th>
              <th className={`${MAIN_CLASS}-phone-numbers`}>
                Phone Number
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
