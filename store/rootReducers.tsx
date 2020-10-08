import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { navigationReducer } from "../Components/Navigation/NavigationContainer";
import { footerReducer } from "../Components/Footer/FooterContainer";
import { pageginationReducer } from "../Components/Pagegination/PaginationContainer";
export interface initialState { }

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  footerReducer: footerReducer,
  pageginationReducer: pageginationReducer,
  form: reduxFormReducer
});

export default rootReducers;