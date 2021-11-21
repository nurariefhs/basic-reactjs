const name = (state = 'Nur Arief HS', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.payload; //action.payload = 'New Name';
            break;
        default:
            return state;
    }
}

export default name;