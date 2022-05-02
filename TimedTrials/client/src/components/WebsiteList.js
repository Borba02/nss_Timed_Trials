import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
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
        <Link to={`/website/new`}>Add New</Link>
        <ListGroup>
          {websites.map((websites) => {
            return (
              <ListGroupItem key={websites.id}>
                <Website website={websites} />
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default WebsiteList;
