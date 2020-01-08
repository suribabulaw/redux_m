// import internal(own) modules
//import userData from './userData';
import { SET_INTERESTS } from '../../actions/masterdata/masterdataActions';
const initState = {
    interests: []
};

const InterestsReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_INTERESTS:
            return { ...state, interests: action.interests };
        default:
            return state;
    }
};

export default InterestsReducer;