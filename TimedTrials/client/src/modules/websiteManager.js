import { getToken } from "./authManager";

const _apiUrl = "/api/Website";

export const getAllWebsites = () => {
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
        throw new Error("An error occurred retrieving websites");
      }
    });
  });
};

export const addWebsite = (website) => {
  return getToken().then((token) => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(website),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An error occured adding new website");
      }
    });
  });
};

export const getWebsiteById = (id) => {
  return getToken().then((token) => {
    return fetch(`${_apiUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("An error occurred retrieving Website");
      }
    });
  });
};

export const deleteWebsite = (id) => {
  return getToken().then((token) => {
    return fetch(`${_apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};
