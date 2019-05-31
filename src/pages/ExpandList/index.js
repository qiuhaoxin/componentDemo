import React,{Component} from 'react';
import './index.less';
import {ExpandList,Tip} from 'aicomponents';



class ExpandListPage extends Component{
    constructor(props){

    	super(props);
        this.tipContent="出差申请";
    	this.data={
           desc:'请选择出差类型',
           list:[
                {index:1,desc:'一般出差一般出差一般出差'},
                {index:2,desc:'项目出差'},
                {index:3,desc:'商务出差'},
                {index:4,desc:'测试出差'},
                {index:5,desc:'项目出差1'},
                {index:6,desc:'商务出差1'},
                {index:7,desc:'测试出差1'},
           ]
        }
    }
    handleTipClick=()=>{
        console.log("tip click");
    }
    handleItemClick=(item)=>{
        console.log("item you click is "+JSON.stringify(item));
    }
    render(){

    	return (
            <div>
                <Tip visible={true} content={this.tipContent} icon={require('../../images/text.png')} onClick={this.handleTipClick}></Tip>
                <ExpandList style={{marginLeft:30,marginRight:30}} data={this.data} className={`ai-el-demo`} onItemClick={this.handleItemClick}></ExpandList>
            </div>
    	)
    }
} 
export default ExpandListPage;