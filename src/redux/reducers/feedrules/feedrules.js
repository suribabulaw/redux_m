// import internal(own) modules
//import userData from './userData';
import { SET_FEEDRULES, GET_FEED_RULES ,DELETE_FEED_RULES } from '../../actions/feedrules/feedrulesAction';
const initState = {
    feedrules: []
};
const feedRulesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FEEDRULES:
            // console.log(action.feedrules)
            //  return { ...state, feedrules1: action.feedrules1 };
            return { ...state, feedrules: state.feedrules.concat([action.feedrules]) };
        case GET_FEED_RULES:
            return { ...state, feedrules: action.feedrules };

        case DELETE_FEED_RULES:
            console.log(action.id ,"testing for id")
            console.log( state._id  ,"testing for id")
           
            return state.filter( rule => rule._id !== action.id)
        default:
            return state;
    }
};

export default feedRulesReducer;