import React from "react";
import { Card, CardBody } from "reactstrap";

const Trial = ({ trial }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>This is a test trial card.</p>
          <p>{trial.website.name}</p>
          <p>${trial.subscriptionPrice} per month</p>
          <p>{trial.trialExpirationDate}</p>
          <p>{trial.website.url}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default Trial;
