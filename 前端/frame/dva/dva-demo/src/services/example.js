import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getProduct(params) {
  return request('/api/product?id='+params.id);
}

export function cloud(params){
  return request('http://182.92.107.95:3000/user/detail?uid='+params.uid)
}