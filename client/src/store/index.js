import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk"; //se usa para poder hacer action async.
import { composeWithDevTools } from 'redux-devtools-extension';


//sconst composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;