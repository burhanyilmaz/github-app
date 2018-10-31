// Store setup
import { compose, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './configureReducer';

const store = createStore(
    reducers,
    undefined,
    compose(applyMiddleware(ReduxThunk)),
);

export default store;
