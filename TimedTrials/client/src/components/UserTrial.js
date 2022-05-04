import React from "react";
import { Card, CardBody } from "reactstrap";

const UserTrial = ({ userTrial }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>This is a test.</p>
          <p>{userTrial.trial.website.name}</p>
          <p>{userTrial.trial.website.url}</p>
          <p>{userTrial.trial.trialDuration}</p>
          <p>{userTrial.trialEndDate}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default UserTrial;
