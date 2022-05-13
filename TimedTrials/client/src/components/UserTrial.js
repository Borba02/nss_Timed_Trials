import React from "react";
import { Card, CardBody } from "reactstrap";

const UserTrial = ({ userTrial }) => {
  return (
    <>
      <br />
      <Card>
        <div>
          <CardBody>
            <p>
              <a className="webLink" href={userTrial.trial.website.url}>
                {userTrial.trial.website.name}
              </a>
              <hr />
            </p>
            <h6>Your Trial Started On:</h6>
            <p>{userTrial.trialStartDate.substr(0, 10)}</p>
            <hr />
            <h6>Trial Duration:</h6>
            <p>{userTrial.trial.trialDuration} Days</p>
            <hr />
            <h6>Your Trial Ends On:</h6>
            <p>{userTrial.trialEndDate.substr(0, 10)}</p>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default UserTrial;
