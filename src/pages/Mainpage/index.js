import React,{Component} from 'react';
import Styles from './index.less';
import NavRouter from '../../components/NavRouter';

import {connect} from 'react-redux';
import asyncComponent from '../../utils/asyncComponent.js';
class Mainpage extends Component{
    constructor(props){
    	super(props);
    	this.navData=[
	    	{id:0,name:'组件',link:'component',component:asyncComponent(()=>import('../Componentpage'))},//,component:asyncComponent(()=>import('../Componentpage'))
	    	{id:1,name:'API',link:'api',component:asyncComponent(()=>import('../APIpage'))},//,component:asyncComponent(()=>import('../APIpage'))
    	];
    }
    render(){
    	return <div>
           
           <NavRouter navArr={this.navData} {...this.props}/>
    	</div>
    }
}

export default connect(state=>({
	userName:state.mainpage.userName,
}))(Mainpage);