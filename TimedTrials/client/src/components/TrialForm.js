import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
import { addTrial } from "../modules/trialManager";
import { getAllWebsites } from "../modules/websiteManager";

const TrialForm = () => {
  const history = useHistory();
  const [websites, setWebsites] = useState([]);

  const emptyTrial = {
    trialDuration: 0,
    trialExpirationDate: "",
    subscriptionPrice: 0,
  };

  const [trial, setTrial] = useState(emptyTrial);

  const getWebsites = () => {
    getAllWebsites().then((websites) => setWebsites(websites));
  };

  useEffect(() => {
    getWebsites();
  }, []);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const trialCopy = { ...trial };

    trialCopy[key] = value;
    setTrial(trialCopy);
  };
  const handleSave = (evt) => {
    evt.preventDefault();
    addTrial(trial).then(() => {
      history.push("/trial");
    });
  };

  return (
    <>
      {/* Generates a drop down list of websites and key value pairs for websiteId and pushes that key value pair into the emptyTrial useState using the handleInputChange function triggered by the dropdown onChange  */}
      <br />
      <select
        id="websiteId"
        value={trial.websiteId}
        onChange={handleInputChange}
      >
        <option value={0}>Select a Website</option>
        {websites?.map((website) => (
          <option key={website.id} value={website.id}>
            {website.name}
          </option>
        ))}
      </select>
      <br />
      <br />

      <Form>
        <FormGroup>
          <Label for="trialDuration">Trial Duration In Days</Label>
          <Input
            type="number"
            name="trialDuration"
            id="trialDuration"
            placeholder="trial duration (days)"
            value={trial.trialDuration}
            onChange={handleInputChange}
          />
          <Label for="trialExpirationDate">Expiration Date</Label>
          <Input
            type="date"
            name="trialExpirationDate"
            id="trialExpirationDate"
            placeholder="expiration date"
            value={trial.trialExpirationDate}
            onChange={handleInputChange}
          />
          <Label for="subscriptionPrice">
            Subscription Price After Trial Ends
          </Label>
          <Input
            type="number"
            name="subscriptionPrice"
            id="subscriptionPrice"
            placeholder="subscription price"
            value={trial.subscriptionPrice}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button className="btn btn-primary" onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TrialForm;
