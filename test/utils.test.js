

import {isEmpty} from '../src/utils/index.js';

const assert=require('assert');


describe('utility',function(){
	it('isEmpty()',function(){
		assert.equal(isEmpty('dd'),false);
	})

	it('shallow equal',function(){
		assert.equal({a:{b:1}},{a:{b:1}},`出错啦！`);
	})

	it('ok',function(){
		assert(false);
	})
})