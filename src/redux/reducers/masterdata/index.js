// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import buycategory from "./buycategory";
import customisefeed from "./customisefeed";
import categorytypes from "./categorytypes";
import displaylanguages from "./displaylanguages";
import interests from "./interests";
import onboarding from "./onboarding";
import postcategory from './postcategory';

export default combineReducers({
    buycategory,
    customisefeed,
    categorytypes,
    displaylanguages,
    interests,
    onboarding,
    postcategory
});