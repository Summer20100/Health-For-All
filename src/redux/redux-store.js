import { legacy_createStore as createStore, combineReducers } from "redux";
import vitaminsReducer from "./vitamins-reducer";
import suplimentesReducer from "./suplimentes-reducer";
import dietsReducer from "./diets-reducer";
import acidsReducer from "./acids-reducer";

let reducers = combineReducers({
  vitaminsPage: vitaminsReducer,
  acidsPage: acidsReducer,
  suplimentesPage: suplimentesReducer,
  dietsPage: dietsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;