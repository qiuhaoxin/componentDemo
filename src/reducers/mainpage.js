
const initialState={
   userName:'haoxin_qiu',
}
export const mainpage=(state=initialState,action)=>{
     const type=action.type;
     switch(type){
         case 'test':
             return {
             	...state,
             	...action.payload,
             }
         break;
         default:
             return {...state};
         break;
     }
}