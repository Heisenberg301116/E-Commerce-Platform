import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { reviewReducer } from "./reducers/reviewReducer";
import { questionReducer } from "./reducers/questionReducer";


// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Persist only the `user` slice of the state
};


const rootReducer = combineReducers({
  user: userReducer,    // to access state of userReducer, use state.user inside a component
  product: productReducer,
  review: reviewReducer,
  question: questionReducer,
});


// Persist the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store);

export { store, persistor };