import React from "react";
import { Card, CardBody } from "reactstrap";

const UserTrial = ({ userTrial }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>This is a test userTrial card.</p>
          <h5>Website</h5>
          <p>
            <strong>{userTrial.trial.website.name}</strong>
            <br />
            {userTrial.trial.website.url}
          </p>
          <h5>Trial Duration</h5>
          <p>{userTrial.trial.trialDuration} Days</p>
          <h5>Trial Ends On</h5>
          <p>{userTrial.trialEndDate}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default UserTrial;
