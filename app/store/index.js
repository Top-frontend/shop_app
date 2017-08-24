import {createStore} from 'redux';
import reducers from '../reducers';

export function configureStore(initState) {
    return createStore(reducers,initState);
}

//redux-tools