// import internal(own) modules
//import userData from './userData';
import { SET_USERS, USER_DELETED, ADD_USER, UPDATE_USER } from '../../actions/users/userActions';
const initState = {
    users: []
};

const userReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_USERS:
            return { ...state, users: action.users };
        case USER_DELETED:

            return { users: state.users.filter(item => item._id !== action.userId) }
        case ADD_USER:
            return { ...state, users: state.users.concat([action.users]) };
        case UPDATE_USER:
            var returndata = state.users.map(item => {
                if (item._id === action.users._id) return action.users;
                return item;
            })
            console.log(returndata)
            return { users: returndata }

        default:
            return state;
    }
};

export default userReducer;