// import internal(own) modules
//import userData from './userData';
import { SET_CUSTOMISEFEED } from '../../actions/masterdata/masterdataActions';
const initState = {
    customisefeed: []
};

const CustomiseFeedReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_CUSTOMISEFEED:
            return { ...state, customisefeed: action.customisefeed };
        default:
            return state;
    }
};

export default CustomiseFeedReducer;