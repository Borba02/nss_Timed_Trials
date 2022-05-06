import React from "react";
import { Card, CardBody } from "reactstrap";

const Trial = ({ trial }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>This is a test trial card.</p>
          <h5>Website</h5>
          <p>
            <strong>{trial.website.name}</strong>
            <br />
            {trial.website.url}
          </p>
          <h5>Subscription Fee after trial ends</h5>
          <p>${trial.subscriptionPrice} per month</p>
          <h5>Trial Offer ends on</h5>
          <p>{trial.trialExpirationDate}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default Trial;
