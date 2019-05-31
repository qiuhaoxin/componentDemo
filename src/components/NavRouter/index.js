/**
 * 导航组件   嵌套路由
 */

import React,{Component} from 'react';
import Styles from './index.less';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import asyncComponent from '../../utils/asyncComponent.js';

const ComponentPage=asyncComponent(()=>import('../../pages/Componentpage'));
const APIPage=asyncComponent(()=>import('../../pages/APIpage'));
const prefixCls='demo-nrouter'
class NavRouter extends Component{
    constructor(props){
    	super(props);
    }
    state={
    	selected:'',
    }
    componentDidMount(){
    	const {history,navArr,match}=this.props;
    	const link=navArr && navArr[0].link;
    	this.setState({
           selected:link,
    	},()=>{
    	   history.push(`${match.url}/${link}`);
    	})
    }
    handleNavClick=(item)=>{
       const {history,match}=this.props;
       this.setState({
       	  selected:item.link,
       },()=>{
          history.push(`${match.url}/${item.link}`);
       })
    }
    renderNav=()=>{
       const {navArr}=this.props;
       const {selected}=this.state;
       const cls=`${prefixCls}-list`;
       console.log('navArr is ',JSON.stringify(navArr))
       const str=navArr.map((item,index)=>{
           const LIClassName=selected==item.link ? 'selected' : '';
       	   return <li key={index} className={`${Styles[LIClassName]}`} onClick={()=>this.handleNavClick(item)}>
               {item.name}
       	   </li>
       })
       return <ul className={`${Styles[cls]}`}>
          {str}
       </ul>
    }
    renderRouter=()=>{
      const {navArr,match}=this.props;
      if(!navArr || navArr.length==0)return null;
      const routerStr=navArr.map(item=>{
        const link=item.link;
            const component=item.component;
            return <Route key={item.id} path={`${match.url}/${link}`} component={item.component}/>
      })
      return <div>
            <Route key={1} path={`${match.url}/component`} component={ComponentPage}/>
            <Route key={2} path={`${match.url}/api`} component={APIPage}/>
      </div>
    }
    render(){
    	const {className,style,navArr,match,history}=this.props;
        const cls=`${prefixCls}-wrapper`
    	return <div className={`${Styles[cls]}`} style={style}>
            {this.renderNav()}
            {this.renderRouter()}
    	</div>
    }
}
NavRouter.defaultProps={
   navArr:null,
}
NavRouter.propTypes={
   navArr:PropTypes.array.isRequired,
}
export default NavRouter;

/*


           {this.renderRouter()}

              
 */

