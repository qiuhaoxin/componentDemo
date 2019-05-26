

import {isEmpty} from '../src/utils/index.js';

const assert=require('../src/utils/index.js');


describe('utility',function(){
	it('isEmpty()',function(){
		assert.equal(isEmpty('dd'),false);
	})
})