import React from "react";
import { Button, Popup } from "semantic-ui-react";

const PopupIcon = props => (
    <Popup
      content={props.content}
      trigger={<Button icon={props.icon} className={props.cssName} style={{ display: "inline-block", float: "right" }} />}
    />
  );

PopupIcon.defaultProps = {
cssName: ""
}
export default PopupIcon;