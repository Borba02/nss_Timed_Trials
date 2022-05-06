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
      <div className="row justify-content-center">
        <Link to={`/website/new`}>Add New Website</Link>
        <ListGroup>
          {websites.map((website) => {
            return (
              <ListGroupItem key={website.id}>
                <Website website={website} />
                <Link to={`/website/edit/${website.id}`}>
                  <Button>Edit Website</Button>
                </Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default WebsiteList;
