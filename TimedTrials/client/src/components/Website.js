import React from "react";
import { Card, CardBody } from "reactstrap";

const Website = ({ website }) => {
  return (
    <Card className="card">
      <div>
        <CardBody>
          <h6>{website.name}</h6>
          <a href={website.url}>{website.url}</a>
        </CardBody>
      </div>
    </Card>
  );
};

export default Website;
