import React from "react";
import { Popup, Icon } from "semantic-ui-react";

const PopupIcon = props => (
    <Popup
      content={props.content}
      trigger={<Icon name={props.icon} size="big" className={`${props.cssName} icon-hover icon-default`} style={{ display: "inline-block" }} />}
    />
  );

PopupIcon.defaultProps = {
cssName: ""
}
export default PopupIcon;