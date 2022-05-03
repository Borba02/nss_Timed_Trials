import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTrial, getTrialById } from "../modules/trialManager";
import { useHistory, Link } from "react-router-dom";
import { Button } from "reactstrap";

const TrialDelete = () => {
  const history = useHistory();
  const [trial, setTrial] = useState();
  const { id } = useParams();
  useEffect(() => {
    getTrialById(id).then(setTrial);
  }, [id]);

  if (!trial) {
    return null;
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteTrial(id).then(() => {
      history.push("/trial");
    });
  };

  return (
    <div>
      <header>Are you sure you want to delete this Trial?</header>
      <br />
      <Button className="btn btn-primary" onClick={handleDelete}>
        Delete
      </Button>
      {"  "}
      <Link className="btn btn-secondary" to="/trial">
        Return to Trial Index
      </Link>
    </div>
  );
};

export default TrialDelete;
