import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import StudentCard from "../common/student-card";

import { fetchStudent } from "../../redux/actions";
import { Card, Icon } from "semantic-ui-react";

const MAIN_CLASS = "StudentDetail";

const CardDescription = props => {
  return (
    <Card>
      <Card.Content header={`${props.firstName} ${props.lastName}`} />
      <Card.Content content={`Degree-${props.degree}`} />
      <Card.Content content={`School-${props.school}`} />
      <Card.Content content={`Race-${props.race}`} />
      <Card.Content content={`Majors-${props.majors}`} />
      <Card.Content content={`Gender-${props.gender}`} />
      <Card.Content content={`Phone Number-${props.phoneNumber}`} />
      <Card.Content content={`Birthday-${props.birthday}`} />
      <Card.Content content={`Veteran-${props.isVeteran}`} />
      <Card.Content extra>
        <Icon name="info" />
        {` GPA: ${props.gpa}`}
      </Card.Content>
    </Card>
  );
};

class StudentDetail extends React.Component {
  componentDidMount() {
    const studentId = this.props.location.pathname.split("/")[2];
    this.props.handleFetchStudent(studentId);
  }
  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <div className={`${MAIN_CLASS}-info`}>
          <StudentCard {...this.props.student} />
        </div>
        <div className={`${MAIN_CLASS}-description`}>
          <CardDescription {...this.props.student} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    student: state.student.data
  };
};

StudentDetail.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default withRouter(
  connect(mapStateToProps, { handleFetchStudent: fetchStudent })(StudentDetail)
);
