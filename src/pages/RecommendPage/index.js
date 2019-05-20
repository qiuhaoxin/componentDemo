/**
 * 应用多于三个的引导卡片
 */

import React,{Component} from 'react';
import Styles from './index.less';
import chailubiaozhun from '../../images/chailubiaozhun.png';
import chuchashenqing from '../../images/chuchashenqing.png';
import xiechengshanglu from '../../images/xiechengshanglu.png';
import {RecommendCard} from 'aicomponents';
class RecommendPage extends Component{
    constructor(props){
    	super(props);
    	this.data=[
           {id:1,ftitle:'人人差旅',ftips:'我明天要去北京出差',ficonpath:chailubiaozhun},
           {id:2,ftitle:'智能核算',ftips:'我要核算',ficonpath:chuchashenqing},
           {id:3,ftitle:'日志管理',ftips:'我要日志管理',ficonpath:chuchashenqing},
           {id:4,ftitle:'业务流服务',ftips:'我要查看业务流程',ficonpath:xiechengshanglu},
		]
    }
	render(){
		return <div>
           <RecommendCard data={this.data} className={Styles['ai-rc-card']} desc={'Hi~我是小K,下面是我学会的技能,快让我表演给你看吧?'}></RecommendCard>
		</div>
	}
}

export default RecommendPage;