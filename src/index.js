import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './createStore.js';
import Router from './router';
import rootSaga from './saga'

const store=configStore();
store.runSaga(rootSaga);

function render(MyComponent){
	return ReactDOM.render(
       <Provider store={store}>
           <MyComponent />
       </Provider>,
       document.getElementById('root')
	)
}

render(Router);

if(module.hot){
	module.hot.accept(()=>{
		render('./router');
	});
}

