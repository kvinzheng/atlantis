import React from "react";
import { connect } from "react-redux";
import { searchProgram } from "../../redux/actions/index";
const MAIN_CLASS = "SearchBar";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleSearchProgram(this.state.value);
  }

  render() {
    return (
      <div className={`${MAIN_CLASS}`}>
        <form onSubmit={this.handleFormSubmit}>
          <div className="ui icon input focus">
            <input
              className={`${MAIN_CLASS}-prompt`}
              type="text"
              placeholder="Search here..."
              onChange={this.handleInputChange}
              value={this.state.value}
            />
            <button className="ui primary button" value="Submit" type="submit">
              <i className="search icon" />
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { handleSearchProgram: searchProgram })(
  SearchBar
);
