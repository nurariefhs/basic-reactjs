const isLogin = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
            break;
        default:
            return state;
    }
}

export default isLogin;