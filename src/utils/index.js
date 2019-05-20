



export const getRouterArr=(arr,routerArr=[])=>{
    arr.forEach(item=>{
    	if('children' in item){
    	  const newArr=item.children;
          getRouterArr(newArr,routerArr);
    	}else{
    	  routerArr.push(item);
    	}
    })
    return routerArr;
    //console.log("routerArr is "+JSON.stringify(routerArr));
}


/*
* 获取数组中的最大主键值 并+1
* @Param list 对象数组
* @Param columnName 主键key 如:id
*/
export const FilterMaxId=(list,columnName)=>{
    const temp=list && list[list.length-1];
    if(temp==undefined)return 1;
    if(columnName in temp)
      return parseInt(temp[columnName])+1;
    return 1;
}