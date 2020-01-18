import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { Button, Popup } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

import SearchBar from "../common/search-bar";

import { fetchPrograms } from "../../redux/actions";

const PopupExample = (props) => (
  <Popup content={props.content} trigger={<Button icon={props.icon} style={{ display: "inline-block"}}/>} />
)

class ProgramList extends React.Component {
  componentWillMount() {
    this.props.handleFetchPrograms();
  }

  renderTemplateList() {
    return this.props.programsList.map((program,index) => {
      return (
        <tr key={program.id}>
          <td style={{ fontWeight: "bold" }}>{index}</td>
          <td>
             <Card style={{width: "200px"}} raised image={program.companyLogo} />
          </td>
          <td>
            <a
              href={`${program.companyWebsite}`}
              className="campaign-template-link"
            >
              {program.companyName}
            </a>
          </td>
          <td>{program.contactEmail}</td>
          <td>{program.contactNumber}</td>
          <td><span>{program.programDescription.substring(0, 50)} <PopupExample content={program.preferMajors.join(", ")} icon={"eye"}/></span></td>
          <td><PopupExample content={program.preferMajors.join(", ")} icon={"world"}/></td>
      
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="create-campaign-navigation">
          <h2 className="ui dividing user-contro">Welcome User</h2>
        </div>
        <table className="campaign-template">
          <thead>
            <tr>
              <th colSpan="7">
                <span className="browse-template">Browse Programs</span>{" "}
                <SearchBar />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ width: "80px" }}>
                <i className="envelope icon" /> ID
              </th>
              <th className="" style={{ width: "113px" }}>
                Company Logo
              </th>
              <th style={{ width: "220px" }}>Module Name</th>
              <th style={{ width: "155px" }}>Program Descriptions</th>
              <th style={{ width: "90px" }}>Phone Numbers</th>
              <th style={{ width: "155px" }}>Updated At</th>
              <th style={{ width: "140px" }}>Prefered Majors</th>
          
            </tr>
            {this.renderTemplateList()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    programsList: state.programs.data 
  };
};

ProgramList.propTypes = {
  programsList: PropTypes.array,
  handleFetchPrograms: PropTypes.func
};

export default connect(
  mapStateToProps,
  { handleFetchPrograms: fetchPrograms}
)(ProgramList);
