import { combineReducers } from "redux";
import newsReducer from "./newsSlice";
import searchTxtReducer from "./searchTxtSlice";



export const rootReducer = combineReducers({
  newsReducer,
  searchTxtReducer
});