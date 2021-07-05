import  changeTheNumber from "./updown";
import todoreducers from "./todoreducers";
import {combineReducers} from "redux";
import calculator from "./calculator";
const rootReducer=combineReducers({
	changeTheNumber:changeTheNumber,
	todoreducers:todoreducers,
	calculator:calculator
});

export default rootReducer;