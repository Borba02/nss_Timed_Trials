import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Website from "./Website";
import { getAllWebsites } from "../modules/websiteManager";

const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);

  const getWebsites = () => {
    getAllWebsites().then((websites) => setWebsites(websites));
  };

  useEffect(() => {
    getWebsites();
  }, []);

  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <Link className="formButton btn" to={`/website/new`}>
          <h4>Add New Website</h4>
        </Link>
        <ListGroup>
          {websites.map((website) => {
            return (
              <>
                <br />
                <ListGroupItem key={website.id} className="cardContainer">
                  <Website website={website} />
                  <Link to={`/website/edit/${website.id}`}>
                    <Button>Edit Website</Button>
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

export default WebsiteList;
