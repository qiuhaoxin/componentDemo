
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
             const id1=FilterMaxId(dialogList,'id')
             dialogList.push({id:id1,name:`el-${id}`,className:'system',text:action.payload});
             console.log('dialogList ',JSON.stringify(dialogList));
             return {
             	...state,
             	...action.payload,
                dialogList,
                scrollEl:id1,
             }
         break;
         case 'say':
             
             let {dialogList}=state;
             let scrollEl='';
             // if(dialogList.length>=1){
             //    const userEl=dialogList.slice(dialogList.length-1);
             //    console.log(`userEl is `,JSON.stringify(userEl))
             //    scrollEl=userEl[0].name;
             //    console.log("scrollEl reducer is "+scrollEl);
             // }
             const id=FilterMaxId(dialogList,'id')
             dialogList.push({id,name:`el-${id}`,className:'user',text:action.payload});

             return {
                ...state,
                dialogList,
                say:action.payload,
                scrollEl:`el-${id}`,
             }
         break;
         default:
             return {...state};
         break;
     }
}