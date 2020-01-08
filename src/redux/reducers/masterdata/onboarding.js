// import internal(own) modules
//import userData from './userData';
import { SET_ONBOARDING } from '../../actions/masterdata/masterdataActions';
const initState = {
    onboarding: []
};

const OnboardingReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_ONBOARDING:
            return { ...state, onboarding: action.onboarding };
        default:
            return state;
    }
};

export default OnboardingReducer;