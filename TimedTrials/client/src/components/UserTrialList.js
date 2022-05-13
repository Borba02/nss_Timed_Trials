import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import UserTrial from "./UserTrial";
import { Link } from "react-router-dom";
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
      <br />
      <div className="row justify-content-center">
        <h3
          className="card-title"
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Your Trials
        </h3>
        <ListGroup>
          {userTrials.map((userTrial) => {
            return (
              <>
                <br />
                <ListGroupItem className="cardContainer" key={userTrial.id}>
                  <UserTrial userTrial={userTrial} />
                  <Link to={`/userTrial/delete/${userTrial.id}`}>
                    <Button className="textUnderline">Trial Cancelled?</Button>
                  </Link>
                </ListGroupItem>
              </>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default UserTrialList;
