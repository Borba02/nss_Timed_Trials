import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import UserTrial from "./UserTrial";
import {
  getAllCurrentUserTrials,
  updateUserTrial,
} from "../modules/userTrialManager";

const UserTrialList = () => {
  const [userTrials, setCurrentUserTrials] = useState([]);
  const [render, setRender] = useState(1);

  const getUserTrials = () => {
    getAllCurrentUserTrials().then((userTrials) =>
      setCurrentUserTrials(userTrials)
    );
  };

  useEffect(() => {
    getUserTrials();
  }, [render]);

  const cancelTrialHandle = (evt) => {
    evt.preventDefault();
    updateUserTrial(evt.target.value);
    setRender(render + 2);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <ListGroup>
          {userTrials.map((userTrial) => {
            return (
              <ListGroupItem key={userTrial.id}>
                <UserTrial userTrial={userTrial} />
                <Button value={userTrial.id} onClick={cancelTrialHandle}>
                  Trial Cancelled?
                </Button>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default UserTrialList;
