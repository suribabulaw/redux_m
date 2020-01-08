export const SET_FEEDRULES = 'SET_FEEDRULES';
export const GET_FEED_RULES = 'GET_FEED_RULES';
export const DELETE_FEED_RULES = "DELETE_FEED_RULES"

export function addRules(feedrules) {
    return {
        type: SET_FEEDRULES,
        feedrules
    }
}


export function feedDelete(id) {
    return {
        type: DELETE_FEED_RULES,
        id
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

export function saveRule(data) {
    console.log(data)
    return dispatch => {
        return fetch('http://localhost:3001/api/feedrules/addfeedrules', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addRules(data.feedrules1)));
    }
}

export function deleteFeed(id) {
    return dispatch => {
        return fetch('http://localhost:3001/api/feedrules/addfeedrules/${id}', {
            method: 'delete',
            headers: {
                "content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(feedDelete(id)));
    }
}


export function fetchfeedrules() {
    return dispatch => {
        fetch('http://localhost:3001/api/feedrules/getFeedRules')
            .then(res => res.json())
            .then(jsondata => dispatch(setFeedRules(jsondata)))
    }
}
export function setFeedRules(feedrules) {
    return {
        type: GET_FEED_RULES,
        feedrules
    }
}