import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ program }) => {
  const {
    companyLogo,
    companyName,
    applicationDeadline,
    companyIntroduction,
    contactNumber,
    contactPerson
  } = program;
  return (
    <Card>
      <Image src={companyLogo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{companyName}</Card.Header>
        <Card.Meta>
          <span className="date">
            Application Deadline: {applicationDeadline}
          </span>
        </Card.Meta>
        <Card.Description>
          <span>Company Introduction: {companyIntroduction}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <a>
            <Icon name="phone" />
            Contact Number: {contactNumber}
          </a>
        </div>
        <div>
          <a>
            <Icon name="group" />
            Contact Person: {contactPerson}
          </a>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;
