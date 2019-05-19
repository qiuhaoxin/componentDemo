/**
 * 左右滑动卡片
 */

import React from 'react';
import Styles from './index.less';

import {SlideList} from 'aicomponents';

class SlideListPage extends React.Component{
	constructor(props){
		super(props);
		this.data=[
			   {id:1,value:[{id:1,value:'财务收款'},{id:2,value:'应收账款'},{id:3,value:'营业收入'},{id:4,value:'现金'},{id:5,value:'利润总额'}]},
			   {id:2,value:[{id:1,value:'财务收款2'},{id:2,value:'应收账款2'},{id:3,value:'营业收入2'},{id:4,value:'现金2'},{id:5,value:'利润总额2'}]},
			   {id:3,value:[{id:1,value:'财务收款3'},{id:2,value:'应收账款3'},{id:3,value:'营业收入3'},{id:4,value:'现金3'},{id:5,value:'利润总额3'}]},
			   {id:4,value:[{id:1,value:'财务收款4'},{id:2,value:'应收账款4'},{id:3,value:'营业收入4'},{id:4,value:'现金4'},{id:5,value:'利润总额4'}]},
			   {id:5,value:[{id:1,value:'财务收款5'},{id:2,value:'应收账款5'},{id:3,value:'营业收入5'},{id:4,value:'现金5'},{id:5,value:'利润总额5'}]},
		];
	}
	handleClick=(text,itemId)=>{
    	console.log("text is "+text+" and id is "+itemId);
    }
    handlePageChange=(curPage)=>{
    	console.log("pageChange is "+curPage);
    }
	render(){
		return <div>
               <SlideList style={{marginLeft:30,marginRight:30,marginTop:30}} data={this.data} text={'您要查询哪个组织的财务指标呢？'}
               onItemClick={this.handleClick} onPageChange={this.handlePageChange}></SlideList>
		</div>
	}
}


export default SlideListPage;