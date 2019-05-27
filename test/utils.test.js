

import {isEmpty,isPhoneNumber,getObjFromArr,timeFormat,getToday,getFileExtension,isEmptyObj} from '../src/utils/index.js';

const assert=require('assert');


describe('utility',function(){
	it('isEmpty()',function(){
		assert.equal(isEmpty('dd'),false);
	})

	it('isPhoneNumber',function(){
		const result=isPhoneNumber('1581749784');
		assert.equal(result,true);
	})

	it('getObjFromArr',function(){
		const testArr=[
           {id:0,name:'qiu'},
           {id:1,name:'hao'},
           {id:2,name:'xin'},
		];
		assert.equal(getObjFromArr(testArr,'id',1),'hao');
	})

	it('timeFormat',function(){
		assert.equal(timeFormat('2015/9/12 9:00','yyyy-mm-dd'),'2015-09-12');
	})

	it('getToday',function(){
		assert.equal(getToday(),'2019-05-27');
	})

	it('getFileExtension',function(){
		assert.equal(getFileExtension('test.jpeg'),'jpeg');
	})
 
    it('isEmptyObj',function(){
    	assert.equal(isEmptyObj({a:1}),false);
    })
})