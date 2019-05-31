/**
 * 
 */

import React from 'react';
import Styles from './index.less';
import {AdaptiveCard} from 'aicomponents';

class AdaptiveCardsPage extends React.Component{
	constructor(props){
		super(props);
		this.hostConfig={
    	    fontFamily: "Segoe UI, Helvetica Neue, sans-serif",
        };
		this.cardData={
		    "type": "AdaptiveCard",
		    "version": "1.0",
		    "body": [
		        {
		            "type": "Image",
		            "url": "http://adaptivecards.io/content/adaptive-card-50.png"
		        },
		        {
		            "type": "TextBlock",
		            "text": "Hello **Adaptive Cards!**"
		        }
		    ],
		    "actions": [
		        {
		            "type": "Action.OpenUrl",
		            "title": "Learn more",
		            "url": "http://adaptivecards.io"
		        },
		        {
		            "type": "Action.OpenUrl",
		            "title": "GitHub",
		            "url": "http://github.com/Microsoft/AdaptiveCards"
		        }
		    ]
		};
	}
	state={
		cardData:{
		    "type": "AdaptiveCard",
		    "version": "1.0",
		    "body": [
		        {
		            "type": "Image",
		            "url": "http://adaptivecards.io/content/adaptive-card-50.png"
		        },
		        {
		            "type": "TextBlock",
		            "text": "Hello Adaptive Cards!"
		        }
		    ],
		    "actions": [
		        {
		            "type": "Action.OpenUrl",
		            "title": "Learn more",
		            "url": "http://adaptivecards.io"
		        },
		        {
		            "type": "Action.OpenUrl",
		            "title": "GitHub",
		            "url": "http://github.com/Microsoft/AdaptiveCards"
		        }
		    ]
		},
	}
    handleAction=(action)=>{
    	console.log('action is ',JSON.stringify(action));
    }
    handleKeyUp=(e)=>{
        const target=e.target;
        const key=e.keyCode;
        //console.log('cardData is '+JSON.stringify(target.value));
    }
    handleInputChange=(e)=>{
        const target=e.target;
        const value=target.value;
        const str=JSON.stringify(JSON.parse(value),null,4);
        this.setState({
        	cardData:JSON.parse(value),
        })
    }
	render(){
		const {cardData}=this.state;
		const str=JSON.stringify(cardData,null,4);
        return <div className={Styles.wrapper}>
            <div className={Styles.text}>
                <textarea rows={16} style={{width:'98%'}} placeholder={'请输入'} value={str} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange}/>
            </div>
            <AdaptiveCard cardData={cardData} onExecuteAction={this.handleAction} hostConfig={this.hostConfig}/>
        </div>
	}
}


export default AdaptiveCardsPage;