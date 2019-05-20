import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';
import React from 'react';
import {nav} from '../common/nav.js';

import Mainpage from '../pages/Mainpage';
import {getRouterArr} from '../utils';
const navArr=getRouterArr(nav,[]);
class Router extends React.Component{
    
    render(){
    	return <HashRouter>
             <Switch>
                 <Route path="/mainpage" component={Mainpage}/>
                 {
                 	navArr.map(item=><Route key={item.id} exact={item.exact} path={item.path} component={item.component} />)
                 }
             </Switch>
    	</HashRouter>
    }
} 
export default Router;