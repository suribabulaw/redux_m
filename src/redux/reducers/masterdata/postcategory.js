// import internal(own) modules
//import userData from './userData';
import { SET_POSTCATEGORY } from '../../actions/masterdata/masterdataActions';
const initState = {
    postcategory: []
};

const PostCategoryReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_POSTCATEGORY:
            return { ...state, postcategory: action.postcategory };
        default:
            return state;
    }
};

export default PostCategoryReducer;