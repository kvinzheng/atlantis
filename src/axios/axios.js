import axios from 'axios';

export default axios.create({
  baseURL: 'https://atlantis-legend.herokuapp.com/api/',
});
