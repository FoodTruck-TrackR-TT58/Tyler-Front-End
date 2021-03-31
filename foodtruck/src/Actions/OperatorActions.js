export const SET_OPERATOR_USERNAME = 'SET_USERNAME';
export const SET_OPERATORID = 'SET_DINERID';

export const setUsername = (username) => {
    return {
        type: SET_OPERATOR_USERNAME,
        payload: username
    }
}
export const setOperatorID = (id) => {
    return {
        type: SET_OPERATORID,
        payload: id
    }
}