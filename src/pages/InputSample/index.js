import React,{Component} from 'react';
import './index.less';
import {Dialog,Input,Exception,Button,URL,Comment,WaitingLoading} from 'aicomponents';
// import WaitingLoading3 from "../../../src/components/WaitingLoading3";
class InputPage extends Component{
    constructor(props){
    	super(props);
    }
    handleAfterEnter=(inputValue,oldValue)=>{
        console.log("inputValue is "+inputValue+" and oldValue is "+oldValue);
    }
    handleHeight=()=>{
       if(this.wrapper){
          console.log("height1 is "+this.wrapper.getHeight());
       }
    }
    handleFocus=()=>{
       console.log("handleFocus is ");
    }
    handleUrl=()=>{
       location.href="https://baidu.com";
    }
    render(){
    	return (
           <div style={{width:'90%',marginLeft:'5%'}}>
               <Input ref={el=>this.wrapper=el} text='测试胜多负少的雷锋' afterEnter={this.handleAfterEnter}
                 focusEvent={this.handleFocus} className={`test-input`}>
               </Input>
               <Input ref={el=>this.wrapper=el} text='测试雷锋' afterEnter={this.handleAfterEnter}
                 focusEvent={this.handleFocus} className={`test-input`}>
               </Input>
               <div onClick={this.handleHeight} style={{marginTop:30}}>
                    getHeight
               </div>

               <Exception>

               </Exception>
               <Button btnStr='测试' style={{backgroundColor:'#4598F0'}}>

               </Button>
               <Button btnStr='测试2' style={{backgroundColor:'#fff',border:'1px solid #E5E5E5',color:'#333'}}>

               </Button>
               <URL urlStr={'点击跳转'} onClick={this.handleUrl}>
                  
               </URL>
               <Comment></Comment>

               <WaitingLoading></WaitingLoading>

           </div>
    	)
    }
}
export default InputPage;

/**
 *                <Answer style={{lineHeight:'23px',padding:'8px 12px 8px 16px'}} str={`Hi~我是小K,下面是我学会的技能，快让我表演给你看吧`}></Answer>
 */