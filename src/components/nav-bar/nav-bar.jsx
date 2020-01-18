import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class GlobalHeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "" };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e,  { name }) {
    this.setState({activeItem:name});
  }
  render() {
    const { activeItem } = this.state;
    const { children } = this.props;

    const navs = [
      ["Programs", "programs"],
      ["Students", "students"],
      ["Applications", "applications"],
    ];

    return (
      <div className="GlobalHeaderNav">
        <Menu pointing secondary>
          <Menu.Menu position="left">
            <Menu.Item className="GlobalHeaderNav-icon">
              <img 
                className="GlobalHeaderNav-icon-pic"
                alt="Atlantis-career"
                src="data:image/jpeg;base64,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"
              />
            </Menu.Item>
            <Menu.Item>
              <span className="GlobalHeaderNav-app-header">Atlantis Front End</span>
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu className="GlobalHeaderNav-items-list">
            {navs.map((x, i) => {
              return (
                <Menu.Item
                  key={i}
                  as={NavLink}
                  exact
                  to={`/${x[1]}`}
                  name={`${x[0]}`}
                  active={activeItem === `${x[0]}`}
                  onClick={this.handleItemClick}
                  className="GlobalHeaderNav-items-list-item"
                />
              )
            })}
          </Menu.Menu>
        </Menu>
        {children}
      </div>
    );
  }
}

GlobalHeaderNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired
}

export default GlobalHeaderNav;
