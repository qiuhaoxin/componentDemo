/**
 * 财务1号报表卡片demo
 */

/**
 * 可配置化数字卡片
 */
import React,{Component} from 'react';
import {NumberCardConfig,Comment} from 'aicomponents';
import Styles from './index.less';

class NumberCardConfigPage extends Component{
    constructor(props){
    	super(props);
    	this.data={    
			desc:'寻遍苍穹，北京工业公司2018年12月份的银行存款数据被我找到啦',
			title:'北京工业公司',
			numeralDetail:[{item:"实际数","value":"￥5,612,089"},
        //{"item":"余额","value":"￥5,608,489"}
      ],
			ratioDetail:[{item:"同比",value:"100%"},{item:"环比","value":"0.00%"},],//{item:"年增长率",value:"100%"}
		}
		this.frame={
			title:[
                {id:0,key:'',value:'title',wordslotType:''},
			],
			body:[
               {id:0,key:'实际数',value:'numeralDetail',wordslotType:'25'},
               {id:1,key:'余额',value:'numeralDetail',wordslotType:'25'},
			],
			footer:[
               {id:0,key:'同比',value:'ratioDetail',wordslotType:''},
               {id:1,key:'环比',value:'ratioDetail',wordslotType:''},
               {id:2,key:'年增长率',value:'ratioDetail',wordslotType:''}
			]
		}
    }	
    handlePositiveClick=()=>{
    }
    handleNegativeClick=()=>{
    	console.log('you click negative!');
    }
    handleGoodClick=()=>{
    	console.log('you click good!');
    }
    handleBadClick=()=>{
    	console.log('you click bad!');
    }
    render(){
    	return <div>
            <NumberCardConfig className={Styles['ai-ncc-demo']} data={this.data} layout={this.frame}>
              <Comment 
               onNegativeClick={this.handleNegativeClick} 
               onPositiveClick={this.handlePositiveClick} 
               goodStr={'谢谢鼓励，还需要我做什么？'}
               badStr={'感谢批评,小K会继续努力的.还需要我做什么？'}>
               onGoodClick={this.handleGoodClick} 
               onBadClick={this.handleBadClick} 
              </Comment>

            </NumberCardConfig>

    	</div>
    }
}


export default NumberCardConfigPage;

