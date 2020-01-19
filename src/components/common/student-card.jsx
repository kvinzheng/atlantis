import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const pictureConfig = {
  male: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  female: "https://react.semantic-ui.com/images/avatar/large/kristy.png"
};
const StudentCard = props => {
  console.log("props", props);
  return (
    <Card>
      <Image src={`${pictureConfig[props.gender]}`} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{`${props.firstName} ${props.lastName}`}</Card.Header>
        <Card.Meta>
          <span className="date">born: {props.birthday} </span>
        </Card.Meta>
        <Card.Description>{`${props.introduction}`}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="phone" />
          {props.phoneNumber}
        </span>
      </Card.Content>
    </Card>
  );
};

export default StudentCard;
