/**
 * 填单类卡片
 */

import React,{Component} from 'react';
import Styles from './index.less';
import {TypeIn} from 'aicomponents';
import imgPath from '../../images/bus.png';

const DIALOG_TITLE="出差事由";
const urlMapping={
  'BUS_TRIP':'renderExtendBus_tip'
}
const bus_trip=[
    {text:'出发地',number:'user_b_l'},
    {text:'目的地',number:'user_e_l'},
    {text:'出发时间',number:'user_b_t'},
    {text:'返回时间',number:'user_e_t'},
]
const SOURCE_ADDRESS="出发地",TARGET_ADDRESS='目的地',BEGIN_TIME="出发时间",BACK_TIME='返回时间';
class TypeInPage extends Component{
	constructor(props){
		super(props);
	}
	state={
		showMasker:false,
		isLoaded:false,
		rate:0,
		hasSubmit:false,
    }
    handleDialogContent=(wordslot)=>{
	    let b_loc=SOURCE_ADDRESS,e_loc=TARGET_ADDRESS,b_t=BEGIN_TIME,e_t=BACK_TIME;
	    wordslot.forEach(item=>{
	       const number=item.number;

	       switch(number){
	         case 'user_e_l':
	             e_loc=item['originalWord']+'  ('+TARGET_ADDRESS+')';
	         break;
	         case 'user_b_l':
	             b_loc=item['originalWord']+'  ('+SOURCE_ADDRESS+')';
	         break;
	         case 'user_b_t':
	             b_t=item['normalizedWord'];
	         break;
	         case 'user_e_t':
	             e_t=item['normalizedWord'];
	         break;
	       }
	    })
	    return (
	       <div className={Styles['dialogContent']}>
              <ul>
                 {
                 	bus_trip.map(item=>{
                 		const tempItem=wordslot.filter(item1=>item1.number==item.number);

                 		return <li key={item.number}>
                        <div className={Styles['dialogCotnent-left']}>
                            {item.text}
                        </div>
                        <div className={Styles['dialogContent-right']}>
                            {tempItem && tempItem.length > 0 ? tempItem[0].normalizedWord : ''}
                        </div>
                 	</li>
                 	})
                 }
              </ul>
	       </div>
	    )
	}
	render(){
		const item={
			className:"chatbot-dialog","text":"您什么时候回来呢？",id:2,"kdIntention":{"intention":"BUS_TRIP","intentionName":"出差申请",
			"kdWordslots":[{"normalizedWord":"2018-09-19","number":"user_b_t","originalWord":"明天","score":0,"wordslotType":"2"},
			{"normalizedWord":"北京","number":"user_e_l","originalWord":"北京","score":0,"wordslotType":"location"}],
			"say":"您什么时候回来呢？","score":0,"sessionId":"3cd9d602-c688-488c-9b9b-dd326711b1e3","status":"confirm"},"type":"TEXT"
		}
		const kdIntention=item['kdIntention'];
		return <div>
                <TypeIn ref={el => this.wrapper1 = el}
                        title={`参加项目启动会`}
                        className={Styles[`ai-ti-demo`]}
                        say="您什么时候回来呢？"
                        kdIntention={kdIntention}
                        content={() => this.handleDialogContent(kdIntention['kdWordslots'])}
                        onSubmit={ () => {console.log('点击了查看详情')} }

                        imgPath={imgPath}
                        loaded={this.state.loaded}
                        showMasker={this.state.showMasker}
                        isFinished={true}
                        onSubmitStr={'查看详情1'}
                >

              </TypeIn>
		</div>
	}
}

export default TypeInPage;