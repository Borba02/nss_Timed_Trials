import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import {
  deleteUserTrial,
  getByUserTrialById,
} from "../modules/userTrialManager";

const UserTrialDelete = () => {
  const history = useHistory();
  const [userTrial, setUserTrial] = useState();
  const { id } = useParams();
  useEffect(() => {
    getByUserTrialById(id).then(setUserTrial);
  }, [id]);

  if (!userTrial) {
    return null;
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteUserTrial(id).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <br />
      <div className="container">
        <Card>
          <CardBody>
            <header>
              This action will remove this Trial from your List. Are you sure
              you want to delete?
            </header>
            <br />
            <div>
              Website: <strong>{userTrial.trial.website.name}</strong>
            </div>
          </CardBody>
        </Card>
        <Button className="btn btn-primary" onClick={handleDelete}>
          Delete
        </Button>
        {"  "}
        <Link className="btn btn-secondary" to="/">
          Return to Your Trials
        </Link>
      </div>
    </>
  );
};

export default UserTrialDelete;
