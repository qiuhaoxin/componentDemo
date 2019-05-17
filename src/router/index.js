import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';
import React from 'react';

import Mainpage from '../pages/Mainpage';


class Router extends React.Component{
    
    render(){
    	return <HashRouter>
             <Switch>
                 <Route path="/mainpage" component={Mainpage}/>
             </Switch>
    	</HashRouter>
    }
} 

export default Router;