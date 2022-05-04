import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Trial from "./Trial";
import { getAllTrials } from "../modules/trialManager";
import {
  getAllCurrentUserTrials,
  addUserTrial,
} from "../modules/userTrialManager";

const TrialList = () => {
  const [userTrials, setCurrentUserTrials] = useState([]);
  const [trials, setTrials] = useState([]);
  const [render, setRender] = useState(1);
  const getTrials = () => {
    getAllTrials().then((trials) => setTrials(trials));
  };
  const getUserTrials = () => {
    getAllCurrentUserTrials().then((userTrials) =>
      setCurrentUserTrials(userTrials)
    );
  };
  useEffect(() => {
    getUserTrials();
    getTrials();
  }, [render]);

  const displayTrackingButton = (id) => {
    const idCheck = userTrials.find((userTrial) => userTrial.trialId === id);
    if (idCheck) {
      return null;
    } else {
      return (
        <Button id={id} onClick={subscriptionButtonHandler}>
          Started Subscription?
        </Button>
      );
    }
  };

  const subscriptionButtonHandler = (evt) => {
    evt.preventDefault();
    addUserTrial(evt.target.id);
    setRender(render + 1);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Link to={`/trial/new`}>Add New Trial</Link>
        <ListGroup>
          {trials.map((trial) => {
            return (
              <ListGroupItem key={trial.id}>
                <Trial trial={trial} />
                {displayTrackingButton(trial.id)}
                <Link to={`/trial/delete/${trial.id}`}>
                  <Button>Delete Trial</Button>
                </Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default TrialList;
