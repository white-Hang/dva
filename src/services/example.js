import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function fetchSuccess() {
  return request('https://jsonplaceholder.typicode.com/users');
  // return request('http://192.168.0.125:3001/student')
}

