import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import logo from "./icon-128.png";

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

    const navigation = [
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
                src={logo}
              />
            </Menu.Item>
            <Menu.Item>
              <span className="GlobalHeaderNav-app-header">Atlantis</span>
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu className="GlobalHeaderNav-items-list">
            {navigation.map((x, i) => {
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
