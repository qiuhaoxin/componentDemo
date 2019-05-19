/**
 * API 页面
 */

import React from 'react';
import Styles from './index.less';

import {Accordion,List} from 'antd-mobile';

class APIPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className={Styles['wrapper']}>
            <Accordion className={Styles['demo-accordion']} onChange={this.onChange}>
                <Accordion.Panel header="云之家API">
			       <List className="my-list">
			              <List.Item>录音接口</List.Item>
			              <List.Item>播放接口</List.Item>
			              <List.Item>分享接口</List.Item>
			       </List>
                </Accordion.Panel>
            </Accordion>
		</div>
	}
}


export default APIPage;