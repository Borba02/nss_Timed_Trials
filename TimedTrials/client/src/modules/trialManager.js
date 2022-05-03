import { getToken } from "./authManager";

const _apiUrl = "/api/Trial";

export const getAllTrials = () => {
  return getToken().then((token) => {
    return fetch(`${_apiUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An error occurred retrieving trials");
      }
    });
  });
};

export const addTrial = (trial) => {
  return getToken().then((token) => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trial),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An error occured adding new trial");
      }
    });
  });
};
