import {put,call,fork,takeEvery,takeLastest} from 'redux-saga/effects';
import {delay} from 'redux-saga';


function* testAPI(){

}


export default function* rootSaga(){
	try{
        yield fork(testAPI);
	}catch(ex){

	}
}