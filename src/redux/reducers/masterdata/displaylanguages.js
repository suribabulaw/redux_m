// import internal(own) modules
//import userData from './userData';
import { SET_DISPLAYLANUGUAGES } from '../../actions/masterdata/masterdataActions';
const initState = {
    displaylanguages: []
};

const DisplayLanguagesReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_DISPLAYLANUGUAGES:
            return { ...state, displaylanguages: action.displaylanguages };
        default:
            return state;
    }
};

export default DisplayLanguagesReducer;