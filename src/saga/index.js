import {put,call,fork,takeEvery,takeLastest} from 'redux-saga/effects';
import {delay} from 'redux-saga';

function* tongyin(payload){
	try{
        yield put({
        	type:'say',
        	payload:payload.payload.say,
        })
        const callback=payload.callback;
        const result={result:1,alerMes:'对话成功',text:'知道啦'+Math.random()}
        callback && callback(result);
	}catch(e){

	}
}

function* chat(payload){
    try{
       yield put({
       	  type:'dealChat',
       	  payload:'知道啦'+Math.random(),
       })
       const callback=payload.callback;
       const result={result:1,alerMes:'对话成功',text:'知道啦'+Math.random()}
       callback && callback(result);
    }catch(e){

    }
}

function* tongyinAPI(){
  yield takeEvery("tongyin",tongyin);
}

function* chatAPI(){
	yield takeEvery('chat',chat);
}


export default function* rootSaga(){
	try{
        yield fork(tongyinAPI);
        yield fork(chatAPI);
	}catch(ex){

	}
}