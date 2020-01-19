import React from "react";
import { Card, Icon } from "semantic-ui-react";

const ApplicationCard = props => {
  return (
    <Card>
      <Card.Header>{`${props.programTitle}`}</Card.Header>
      <Card.Meta>
        <span className="date">programSchedule: {props.programSchedule} </span>
      </Card.Meta>
      <Card.Content>{`programTitle: ${props.programTitle}`}</Card.Content>
      <Card.Content>{`programCity: ${props.programCity}`}</Card.Content>
      <Card.Content>{`companyWebsite: ${props.companyWebsite}`}</Card.Content>
      <Card.Content>{`personalStatement: ${props.personalStatement}`}</Card.Content>

      <Card.Content extra>
        <span>
          <Icon name="phone" />
          {props.recruiterPhone}
        </span>
      </Card.Content>
    </Card>
  );
};

export default ApplicationCard;
