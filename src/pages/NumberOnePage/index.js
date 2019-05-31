/**
 * 财务1号报表卡片demo
 */

import React,{Component} from 'react';
import Styles from './index.less';
import {NumberOneCard} from 'aicomponents';
class NumberOnePage extends Component{
	constructor(props){
		super(props);
		    this.cardData={
		         title:'金蝶云2月份的续费率',
		         type:'VERTICAL_SIMPLE_CARD',
		         bodyData:[
		         
		            [{key:'苍穹',value:'50%',id:0},{key:'星空',value:'70%',id:1}],
		   
		         ],
		         updateTime:'2018.09.01',
		    }
		    // this.cardData={
		    // 	"bodyData":[

		    // 	   {"id":"1","key":"苍穹","value":"50%"},{"id":"2","key":"星空","value":"70%"}
                   
		    // 	   ],
		    //     "title":"金蝶云2月份的续费率",
		    //     "updateTime":"2018.03.23",
		    //     "type":"VERTICAL_SIMPLE_CARD"
		    // }
		    this.cardDataOne={
		         title:'金蝶中国业绩总览',
		         type:'COMBINED_CARD',
		         bodyData:[
		            {  
		              id:0,
		              numberDetail:[
		              {key:'本年收款',value:'¥1234万'},
		              {key:'缺口',value:'¥-34万'},
		               ],
		               radioDetail:[
		                {key:'完成率',value:'60%'},
		                {key:'云占比',value:'34%'},
		                {key:'同比增长',value:'60%'},   
		               ]
		            },
		            {  
		              id:1,
		              numberDetail:[
		                {key:'本月收款',value:'¥124万'},
		                {key:'缺口',value:'¥34万'},
		               ],
		               radioDetail:[
		                {key:'完成率',value:'50%'},
		                {key:'同比增长',value:'50%'},   
		                {key:'云占比',value:'64%'}
		               ]
		            }
		         ],
		         updateTime:'2018.09.01',
		    }
		    this.cardDataTwo={
		         title:'苍穹客户数量',
		         type:'HORIZONTAL_SIMPLE_CARD',
		         bodyData:[
		                  [{key:'累计总数：',value:'1000家',id:0},{key:'本年新增：',value:'400家',id:1},{key:'同比增长：',value:'40%',id:2}],
		            // [{key:'K/3WISE',value:'50%',id:0},{key:'EAS',value:'70%',id:1}],
		         ],
		         updateTime:'2018.09.01',
		    }
	}
	render(){
		return <div className={Styles['ai-nop-demo']}>
            <NumberOneCard data={this.cardData} desc={'数据找到啦'}></NumberOneCard>
            <NumberOneCard data={this.cardDataOne} desc={'数据找到啦'}></NumberOneCard>
            <NumberOneCard data={this.cardDataTwo}></NumberOneCard>
		</div>
	}
}

export default NumberOnePage;