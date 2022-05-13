import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  Card,
  CardBody,
} from "reactstrap";
import { getWebsiteById, editWebsite } from "../modules/websiteManager";

const WebsiteForm = () => {
  const emptyWebsite = {
    id: null,
    name: "",
    url: "",
  };

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetchWebsiteById();
  }, []);

  const [website, setWebsite] = useState(emptyWebsite);

  const fetchWebsiteById = () => {
    getWebsiteById(id).then((w) => {
      setWebsite(w);
    });
  };

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const websiteCopy = { ...website };
    websiteCopy.id = id;
    websiteCopy[key] = value;
    setWebsite(websiteCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    editWebsite(website).then(() => {
      history.push("/website");
    });
  };

  return (
    <div className="container">
      <br />
      <Card>
        <h2>Edit Website</h2>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={website.name}
                onChange={handleInputChange}
              />
              <br />
              <Label for="url">URL:</Label>
              <Input
                type="text"
                name="url"
                id="url"
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
