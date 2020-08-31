import axios from 'axios';

export const loadImageHandler = async (url, key) => {
  try {
    const response = await axios.get(`${url}${key}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
