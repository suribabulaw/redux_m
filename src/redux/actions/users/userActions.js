export const SET_USERS = 'SET_USERS';
export const USER_DELETED = 'USER_DELETED';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_ROLES = 'SET_ROLES';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText)
        error.response = response;
        throw error;
    }
}


export function fetchusers() {
    return dispatch => {
        fetch('http://localhost:3001/api/users/getUsers')
            .then(res => res.json())
            .then(jsondata => dispatch(setUsers(jsondata)))
    }
}

export function addUser(users) {
    return {
        type: ADD_USER,
        users
    }
}

export function saveUser(data) {
    return dispatch => {
        return fetch('http://localhost:3001/api/users/addusers', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addUser(data.users)));
    }
}
export function updateUser(data) {
    return dispatch => {
        return fetch('http://localhost:3001/api/users/updateusers', {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(updateUserdata(data.users)));
    }
}
export function updateUserdata(users) {
    return {
        type: UPDATE_USER,
        users
    }

}
export function deleteUser(id) {

    return dispatch => {
        fetch(`http://localhost:3001/api/users/deleteuser/${id}`, {
            method: 'delete',
            headers: {
                "content-Type": "application/json"
            }
        })
            .then(data => dispatch(userDeleted(id)))
    }
}
export function userDeleted(userId) {
    return {
        type: 'USER_DELETED',
        userId
    }
}