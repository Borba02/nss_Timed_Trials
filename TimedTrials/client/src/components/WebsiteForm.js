import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  Card,
  CardBody,
} from "reactstrap";
import { addWebsite } from "../modules/websiteManager";

const WebsiteForm = () => {
  const history = useHistory();
  const emptyWebsite = {
    name: "",
    url: "",
  };

  const [website, setWebsite] = useState(emptyWebsite);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const websiteCopy = { ...website };

    websiteCopy[key] = value;
    setWebsite(websiteCopy);
  };
  const handleSave = (evt) => {
    evt.preventDefault();
    addWebsite(website).then(() => {
      history.push("/website");
    });
  };

  return (
    <div className="container">
      <br />
      <Card>
        <h2>New Website</h2>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="website name"
                value={website.name}
                onChange={handleInputChange}
              />
              <br />
              <Label for="url">URL:</Label>
              <Input
                type="text"
                name="url"
                id="url"
                placeholder="website url"
                value={website.url}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>
              Submit
            </Button>
            {"  "}
            <Link className="btn btn-secondary" to="/website">
              Return to Website List
            </Link>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default WebsiteForm;
