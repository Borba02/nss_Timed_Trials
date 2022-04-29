import React from "react";
import { Card, CardBody } from "reactstrap";

const Website = ({ website }) => {
  return (
    <Card>
      <div>
        <CardBody>
          <p>This is a test.</p>
          <p>{website.name}</p>
          <p>{website.url}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default Website;
