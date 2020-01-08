export const SET_BUYCATEGORY = 'SET_BUYCATEGORY';
export const SET_CUSTOMISEFEED = 'SET_CUSTOMISEFEED';
export const SET_CATEGORYTYPES = 'SET_CATEGORYTYPES';
export const SET_DISPLAYLANUGUAGES = 'SET_DISPLAYLANUGUAGES';
export const SET_INTERESTS = 'SET_INTERESTS';
export const SET_ONBOARDING = 'SET_ONBOARDING';
export const SET_POSTCATEGORY = 'SET_POSTCATEGORY';

export function fetchbuycategory() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getbuycategory')
            .then(res => res.json())
            .then(jsondata => dispatch(setBuyCategory(jsondata)))
    }
}
export function fetchcustomisefeed() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getcustomisefeed')
            .then(res => res.json())
            .then(jsondata => dispatch(setCustomisefeed(jsondata)))
    }
}
export function fetchcategorytypes() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getcategorytypes')
            .then(res => res.json())
            .then(jsondata => dispatch(setCategoryTypes(jsondata)))
    }
}
export function fetchdisplaylanguages() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getdisplaylanguages')
            .then(res => res.json())
            .then(jsondata => dispatch(setDisplayLanuguages(jsondata)))
    }
}
export function fetchinterests() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getinterests')
            .then(res => res.json())
            .then(jsondata => dispatch(setinterests(jsondata)))
    }
}
export function fetchonboarding() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getonboarding')
            .then(res => res.json())
            .then(jsondata => dispatch(setonboarding(jsondata)))
    }
}
export function fetchpostcategory() {
    return dispatch => {
        fetch('http://13.235.36.62:3007/api/v1/md/getpostcategory')
            .then(res => res.json())
            .then(jsondata => dispatch(setpostcategory(jsondata)))
    }
}

export function setBuyCategory(buycategory) {
    return {
        type: SET_BUYCATEGORY,
        buycategory
    }
}
export function setCustomisefeed(customisefeed) {
    return {
        type: SET_CUSTOMISEFEED,
        customisefeed
    }
}
export function setCategoryTypes(categorytypes) {
    return {
        type: SET_CATEGORYTYPES,
        categorytypes
    }
}
export function setDisplayLanuguages(displaylanguages) {
    return {
        type: SET_DISPLAYLANUGUAGES,
        displaylanguages
    }
}
export function setinterests(interests) {
    return {
        type: SET_INTERESTS,
        interests
    }
}
export function setonboarding(onboarding) {
    return {
        type: SET_ONBOARDING,
        onboarding
    }
}
export function setpostcategory(postcategory) {
    return {
        type: SET_POSTCATEGORY,
        postcategory
    }
}