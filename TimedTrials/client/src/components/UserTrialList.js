import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import UserTrial from "./UserTrial";
import { getAllCurrentUserTrials } from "../modules/userTrialManager";

const UserTrialList = () => {
  const [userTrials, setCurrentUserTrials] = useState([]);

  const getUserTrials = () => {
    getAllCurrentUserTrials().then((userTrials) =>
      setCurrentUserTrials(userTrials)
    );
  };

  useEffect(() => {
    getUserTrials();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <ListGroup>
          {userTrials.map((userTrial) => {
            return (
              <ListGroupItem key={userTrial.id}>
                <UserTrial userTrial={userTrial} />
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default UserTrialList;
