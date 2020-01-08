//import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../../types/types';
var client = require('./client');

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
} 

export function login(data) {
  return dispatch => {
    return client.post('users/login', data).then(res => {
      console.log(res)
      const token = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

// export function loginFailure(errors) {
//     return {
//         type: LOGIN_FAILURE,
//         errors
//     };
// }
// export function login(data) {
//     return dispatch => {
//         return fetch('http://localhost:3001/api/users/login', {
//             method: 'post',
//             crossDomain: true,
//             body: JSON.stringify(data),
//             headers: { 'Content-Type': 'application/json' }
//         }).then(res => {
//             res.json()
//         }).then(responseJson => {
//             console.log(responseJson)
//         }
//         )
//     }
// }