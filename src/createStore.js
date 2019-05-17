import {applyMiddleware,createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers/index.js';


export default function configStore(){
	const sagaMiddleware=createSagaMiddleware();
    return {
    	...createStore(rootReducers,applyMiddleware(sagaMiddleware)),
    	runSaga:sagaMiddleware.run,
    }
}