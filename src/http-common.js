import axios from 'axios';

export default axios.create({
  baseURL: 'https://todo-crud-node.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
