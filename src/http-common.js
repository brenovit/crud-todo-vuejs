import axios from 'axios';

export default axios.create({
  baseURL: 'https://todo-crud-node.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
    'Access-Control-Allow-Headers':
      'X-Requested-With, Content-Type, X-Codingpedia',
  },
});
