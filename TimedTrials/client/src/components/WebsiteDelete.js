import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteWebsite, getWebsiteById } from "../modules/websiteManager";
import { useHistory, Link } from "react-router-dom";
import { Button } from "reactstrap";

const WebsiteDelete = () => {
  const history = useHistory();
  const [website, setWebsite] = useState();
  const { id } = useParams();
  useEffect(() => {
    getWebsiteById(id).then(setWebsite);
  }, [id]);

  if (!website) {
    return null;
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteWebsite(id).then(() => {
      history.push("/website");
    });
  };

  return (
    <div>
      <header>Are you sure you want to delete this Website?</header>
      <div>
        Website: <strong>{website.name}</strong>
      </div>
      <Button className="btn btn-primary" onClick={handleDelete}>
        Delete
      </Button>
      {"  "}
      <Link className="btn btn-secondary" to="/website">
        Return to Website Index
      </Link>
    </div>
  );
};

export default WebsiteDelete;
