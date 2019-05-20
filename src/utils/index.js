



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