export const SET_DINER_USERNAME = 'SET_USERNAME';
export const SET_DINERID = 'SET_DINERID';

export const setUsername = (username) => {
    return {
        type: SET_DINER_USERNAME,
        payload: username
    }
}
export const setDinerID = (id) => {
    return {
        type: SET_DINERID,
        payload: id
    }
}