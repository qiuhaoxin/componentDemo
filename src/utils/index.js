



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


export const isEmpty=function(str){
    if (str === undefined){
        return true
    }
    const emptyReg=/^\s*$/;
    if(emptyReg.test(str)){
        return true;
    }
    return false;
}

/*
 * 是否正确手机号码
 */
export const isPhoneNumber = function(str){
    console.log('str is '+str);
    const reg = /^[1]([3-9])[0-9]{9}$/;
    return reg.test(str);
}

/*
 * 从数组中获取属性名为[columnName],值为value 的对象
 */
export const getObjFromArr=function(arr,columnName,value){
    return arr.filter(item=>{
        return item[columnName]==value;
    })[0];
}

/**
 * [timeFormat description]
 * @param  {[type]} timeStr [description]
 * @param  {[type]} format  [description]
 * @return {[type]}         [description]
 */
export const timeFormat=function(timeStr,format){
    const time=new Date(timeStr);
    let month=time.getMonth() + 1;
    month=month<10?('0'+month):month;
    let day=time.getDate();
    day=day<10?('0'+day):day;
    switch(format){
        case "yyyy-mm-dd":
            return time.getFullYear()+"-"+month+"-"+day;
            break;
        default :
            return timeStr;
        break;
    }
}

export const getToday=function(format){
    const today=new Date() * 1;
    return timeFormat(today,"yyyy-mm-dd");
}

/**
 * 获取资源后缀名称
 * @param  {[type]} filename [description]
 * @return {[type]}          [description]
 */
export const getFileExtension=function(filename){
    var ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];
}


export const isEmptyObj=function (obj){
    if(typeof obj!=='object')return true;
    for(let key in obj){
        return false;
    }
    return true;
}