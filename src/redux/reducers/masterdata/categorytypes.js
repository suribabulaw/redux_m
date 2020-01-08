// import internal(own) modules
//import userData from './userData';
import { SET_CATEGORYTYPES } from '../../actions/masterdata/masterdataActions';
const initState = {
    categorytypes: []
};

const CategoryTypesReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_CATEGORYTYPES:
            return { ...state, categorytypes: action.categorytypes };
        default:
            return state;
    }
};

export default CategoryTypesReducer;