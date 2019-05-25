/**
 * React 列表滚动
 */

import React from 'react';
import Styles from './index.less';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {connect} from 'react-redux';
class ReactScrollPage extends React.Component{
   constructor(props){
     super(props);
   }
   state={
       dialogList:[],
       say:'',
   }
   componentDidMount(){
      const {userName}=this.props;
      console.log('userName is ',userName);
   }
   componentWillReceiveProps(nextProps){   //componentWillReceiveProps
      console.log(`dialogList will receive nextProps is `,JSON.stringify(nextProps))
      const {dialogList}=nextProps;
      console.log(`dialogList will receive is `,JSON.stringify(dialogList))
      this.setState({
          dialogList,
      })
   }
   componentDidUpdate(){
      const {scrollEl}=this.props;
      console.log(`scrollEl did update`,scrollEl);
      if(scrollEl){
        this.scrollTo(scrollEl)
      }

   }
   handleClick=()=>{
       this.scrollTo();
   }
   scrollTo(scrollEl) {
      //console.log(scrollEl,scrollEl);
      scroller.scrollTo(scrollEl, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
   }
   handleInputChange=(e)=>{
       // const target=e.target;
       // const code=e.keyCode;
       // console.log(`value is`,target.value);
       // console.log("keycode ",code);
   }

   handleKeyUp=(e)=>{
       const _this=this;
       const {dispatch}=this.props;
       const target=e.target;
       const code=e.keyCode;
       if(code==13){
           //enter
           dispatch({
              type:'tongyin',
              payload:{
                say:target.value,
              },
              callback:function(response){
                 target.value='';
                 //_this.handleResponse();
              }
           })
       }
   }
   handleResponse=()=>{
      const {dispatch}=this.props;
      dispatch({
        type:'chat',
        payload:{

        },
        callback:function(response){

        }
      })
   }
   renderDialogList=()=>{
      const {dialogList}=this.state;
      if(dialogList.length==0)return null;
      console.log(`dialogList `,JSON.stringify(dialogList));
      const str=dialogList.map(item=>{
           return <Element key={item.id} name={item.name} className={Styles['element']}>
              <span>{item.text}</span>
           </Element>
      })

      return <div>
          {str}
      </div>
   }
   render(){
     return <div>
        <div className={Styles['content']}>
            {
              this.renderDialogList()
            }
        </div>
        <div className={Styles['footer']}>
            <input onChange={this.handleInputChange} onKeyUp={this.handleKeyUp}/>
        </div>
     </div>
   }
}

export default connect(state=>{
  return ({
    dialogList:state.mainpage.dialogList,
    userName:state.mainpage.userName,
    say:state.mainpage.say,
    scrollEl:state.mainpage.scrollEl,
  })
})(ReactScrollPage);


