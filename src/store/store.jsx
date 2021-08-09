import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

import thunk from "redux-thunk";
import { notesReducer } from "../reducers/notesReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
