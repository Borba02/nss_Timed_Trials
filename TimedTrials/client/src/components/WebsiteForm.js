import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
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
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="website name"
          value={website.name}
          onChange={handleInputChange}
        />
        <Label for="url">URL</Label>
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
    </Form>
  );
};

export default WebsiteForm;
