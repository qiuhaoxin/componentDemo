/**
 * 反馈卡片 点赞、点踩、分享
 */

import React from 'react';

import Styles from './index.less';
import {Comment} from 'aicomponents';

class Feekback extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>
              <Comment 
	               onNegativeClick={this.handleNegativeClick} 
	               onPositiveClick={this.handlePositiveClick} 
	               goodStr={'谢谢鼓励，还需要我做什么？'}
	               badStr={'感谢批评,小K会继续努力的.还需要我做什么？'}>
	               onGoodClick={this.handleGoodClick} 
	               onBadClick={this.handleBadClick} 
              </Comment>
		</div>
	}
}
export default Feekback;