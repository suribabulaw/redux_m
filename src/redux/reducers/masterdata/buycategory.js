// import internal(own) modules
//import userData from './userData';
import { SET_BUYCATEGORY } from '../../actions/masterdata/masterdataActions';
const initState = {
    buycategory: []
};

const BuyCategoryReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_BUYCATEGORY:
            return { ...state, buycategory: action.buycategory };
        default:
            return state;
    }
};

export default BuyCategoryReducer;