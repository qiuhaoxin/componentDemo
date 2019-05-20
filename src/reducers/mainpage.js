
import {FilterMaxId} from '../utils';
const initialState={
   userName:'haoxin_qiu',
   dialogList:[],
   scroll:'',
   say:'',
   scrollEl:'',
}
export const mainpage=(state=initialState,action)=>{
     const type=action.type;
     switch(type){
         case 'dealChat':
             console.log('action ',JSON.stringify(action));
             let dialogList1=state.dialogList;

             return {
             	...state,
             	...action.payload,
             }
         break;
         case 'say':
             
             let {dialogList}=state;
             let scrollEl='';
             if(dialogList.length>=2){
                const userEl=dialogList.slice(dialogList.length-2,dialogList.length-1);
                console.log("userEl is "+JSON.stringify(userEl))
             }
             const id=FilterMaxId(dialogList,'id')
             dialogList.push({id,name:`el-${id}`,className:'user',text:action.payload});
             console.log('dialogList ',JSON.stringify(dialogList));
             // const afterState={...state,dialogList};
             // console.log('afterdstate',JSON.stringify(afterState));
             // return afterState;
             return {
                ...state,
                dialogList,
                say:action.payload
             }
         break;
         default:
             return {...state};
         break;
     }
}