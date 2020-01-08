export const SET_MODERATIONS = 'SET_MODERATIONS';
export const APPROVE_MODERATIONS = 'APPROVE_MODERATIONS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_ROLES = 'SET_ROLES';

export function setModerations(moderations) {
    return {
        type: SET_MODERATIONS,
        moderations
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


export function fetchmoderations() {
    return dispatch => {
        fetch('http://13.235.36.62:3005/getAbuseFeeds')
            .then(res => res.json())
            .then(jsondata => dispatch(setModerations(jsondata)))
    }
}
export function approveFeed(data) {
    console.log(data)
    return dispatch => {
        return fetch('http://13.235.36.62:3005/moderateFeed', {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(approvedmoderationsdata(data.feedid)));
    }
}
export function approvedmoderationsdata(feedid) {
    return {
        type: APPROVE_MODERATIONS,
        feedid
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