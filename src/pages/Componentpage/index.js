/**
 * 组件页面
 */

import React from 'react';
import Styles from './index.less';

 import {Accordion, List} from 'antd-mobile';
// import Button from 'antd-mobile/lib/button';  // 加载 JS
// import 'antd-mobile/lib/button/style/css'; 
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class ComponentPage extends React.Component{
	constructor(props){
		super(props);
	}
	handleListClick=()=>{
		const {history,userName}=this.props;
		history.push('/typein');
	}
	render(){
		return <div className={Styles['wrapper']}>
            <Accordion className={Styles['demo-accordion']} onChange={this.onChange}>
                <Accordion.Panel header="流程卡片">
			       <List className="my-list">
			              <List.Item ><Link to={'/typein'}>填单类卡片</Link></List.Item>
			              <List.Item><Link to={'/numbercardconfig'}>财务指标卡片</Link></List.Item>
			              <List.Item><Link to={'/numberone'}>1号报表卡片</Link></List.Item>
			              <List.Item><Link to={'/slidelist'}>滑动列表卡片</Link></List.Item>
			       </List>
                </Accordion.Panel>
            </Accordion>

            <Accordion className={Styles['demo-accordion']} onChange={this.onChange}>
                <Accordion.Panel header="辅助卡片">
			       <List className="my-list">
			              <List.Item>点赞卡片</List.Item>
			              <List.Item>应用三个以上引导卡片</List.Item>
			              <List.Item>少于两个应用引导卡片</List.Item>
			       </List>
                </Accordion.Panel>
            </Accordion>

            <Accordion className={Styles['demo-accordion']} onChange={this.onChange}>
                <Accordion.Panel header="功能组件">
			       <List className="my-list">
			              <List.Item>手动修改</List.Item>
			       </List>
                </Accordion.Panel>
            </Accordion>

            <Accordion className={Styles['demo-accordion']} onChange={this.onChange}>
                <Accordion.Panel header="图标卡片">
			       <List className="my-list">
			            <List.Item>饼状图</List.Item>
			            <List.Item>柱状图</List.Item>
			            <List.Item>折线图</List.Item>
			            <List.Item>折线柱状图</List.Item>
			       </List>
                </Accordion.Panel>
            </Accordion>
		</div>
	}
}


ComponentPage.defaultProps={

}
ComponentPage.propTypes={

}

export default connect(state=>({
	userName:state.mainpage.userName,
}))(ComponentPage)