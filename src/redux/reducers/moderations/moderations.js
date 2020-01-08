// import internal(own) modules
//import userData from './userData';
import { SET_MODERATIONS, APPROVE_MODERATIONS } from '../../actions/moderation/moderationActions';
const initState = {
    moderations: []
};

const moderationsReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_MODERATIONS:
            return { ...state, moderations: action.moderations };
        case APPROVE_MODERATIONS:
            console.log(state.moderations)
            return { moderations: state.moderations.filter(item => item.feed_id !== action.feedid) }
        default:
            return state;
    }
};

export default moderationsReducer;