import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Trial from "./Trial";
import { getAllTrials } from "../modules/trialManager";

const TrialList = () => {
  const [trials, setTrials] = useState([]);

  const getTrials = () => {
    getAllTrials().then((trials) => setTrials(trials));
  };

  useEffect(() => {
    getTrials();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Link to={`/trial/new`}>Add New Trial</Link>
        <ListGroup>
          {trials.map((trial) => {
            return (
              <ListGroupItem key={trial.id}>
                <Trial trial={trial} />
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default TrialList;
