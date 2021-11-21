const changeName = (value = '') => {
    return {
        type: 'CHANGE_NAME',
        payload: value
    }
}

export default changeName;