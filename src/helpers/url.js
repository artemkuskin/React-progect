const serverUrl = process.env.URL;

export const getFullUrl = (path) => `${serverUrl}/${path}`;
