import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Trial = ({ trial }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>
            <a className="webLink" href={trial.website.url}>
              {trial.website.name}
            </a>
            <hr />
          </p>
          <h6>Subscription fee after trial ends:</h6>
          <p>${trial.subscriptionPrice} per month</p>
          <hr />
          <h6>Trial offer ends on:</h6>
          <p>{trial.trialExpirationDate.substr(0, 10)}</p>
          <hr />
          <h6>Trial duration:</h6>
          <p>{trial.trialDuration} Days</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default Trial;
