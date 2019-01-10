// A starter file for wrapping a JSON api.
// Code adapted from https://github.com/sveltejs/realworld

const API_BASE = null;

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const PATCH = "PATCH";
const DELETE = "DELETE";

function send({ method, path = "", data, options = {} }) {
  options = buildOptions({ method, data, options });

  return fetch(applyUrlBase(path), options).then(handleResponse);
}

export const get = (path, options = {}) => {
  return send({ method: GET, path, options });
};

export const del = (path, options = {}) => {
  return send({ method: DELETE, path, options });
};

export const post = (path, data, options = {}) => {
  return send({ method: POST, path, data, options });
};

export const put = (path, data, options = {}) => {
  return send({ method: PUT, path, data, options });
};

export const patch = (path, data, options = {}) => {
  return send({ method: PATCH, path, data, options });
};
export class ApiError {
  constructor(message = "", data = {}, status = null) {
    try {
      data = JSON.parse(data);
    } catch (e) {}

    this.message = message;
    this.data = data;
    this.status = status;
  }

  toString() {
    return [
      `${this.message}`,
      `Response: ${JSON.stringify(this.data)}`,
      `Status: ${this.status}`
    ].join("\n");
  }
}

function handleResponse(res) {
  console.log("Handling response");
  if (!res.ok) {
    throw ApiError(res.statusText, res.json(), res.status);
  }

  return res.json();
}

function applyUrlBase(url) {
  return API_BASE ? `${API_BASE}/${url}` : url;
}

function buildOptions({ method, data, options }) {
  return {
    method: method,
    body: JSON.stringify(data),
    ...options
  };
}
