import React, {Component} from 'react';
import {Dialog, TypeIn, RecommendCard, BackIcon, Loading, StarRate, Answer} from 'aicomponents';

import './index.less';

import chailubiaozhun from '../../images/chailubiaozhun.png';
import chuchashenqing from '../../images/chuchashenqing.png';
import xiechengshanglu from '../../images/xiechengshanglu.png';
import imgPath from '../../images/bus.png';
const DIALOG_TITLE = "出差事由";
const urlMapping = {
    'BUS_TRIP': 'renderExtendBus_tip'
}
const bus_trip = [
    {text: '出发地', number: 'user_b_l'},
    {text: '目的地', number: 'user_e_l'},
    {text: '出发时间', number: 'user_b_t'},
    {text: '返回时间', number: 'user_e_t'},
]
const SOURCE_ADDRESS = "出发地", TARGET_ADDRESS = '目的地', BEGIN_TIME = "出发时间", BACK_TIME = '返回时间';

class DialogPage extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {id: 1, ftitle: '人人差旅', ftips: '我明天要去北京出差', ficonpath: chailubiaozhun},
            {id: 2, ftitle: '智能核算', ftips: '我要核算', ficonpath: chuchashenqing},
            {id: 3, ftitle: '日志管理', ftips: '我要日志管理', ficonpath: chuchashenqing},
            {id: 4, ftitle: '业务流服务', ftips: '我要查看业务流程', ficonpath: xiechengshanglu},
        ]
        this.typeInData = []
    }

    state = {
        showMasker: false,
        isLoaded: false,
        rate: 0,
        hasSubmit: false,
    }
    handleDialogContent = (wordslot) => {
        let b_loc = SOURCE_ADDRESS, e_loc = TARGET_ADDRESS, b_t = BEGIN_TIME, e_t = BACK_TIME;
        wordslot.forEach(item => {
            const number = item.number;

            switch (number) {
                case 'user_e_l':
                    e_loc = item['originalWord'] + '  (' + TARGET_ADDRESS + ')';
                    break;
                case 'user_b_l':
                    b_loc = item['originalWord'] + '  (' + SOURCE_ADDRESS + ')';
                    break;
                case 'user_b_t':
                    b_t = item['normalizedWord'];
                    break;
                case 'user_e_t':
                    e_t = item['normalizedWord'];
                    break;
            }
        })
        return (
            <div className={'dialogContent'}>
                <ul>
                    {
                        bus_trip.map(item => {
                            const tempItem = wordslot.filter(item1 => item1.number == item.number);

                            return <li key={item.number}>
                                <div className={'dialogCotnent-left'}>
                                    {item.text}
                                </div>
                                <div className={'dialogContent-right'}>
                                    {tempItem && tempItem.length > 0 ? tempItem[0].normalizedWord : ''}
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleDialogSubmit = (item) => {
        console.log("submit");
        // const url=item && item['url'];
        // const urlStr=url && url['url'];
        // const {dialogList}=this.state;
        // if(urlStr){
        //    saveInLocalStorage('dialog',dialogList);
        //    location.href=urlStr;
        // }
    }
    handleDialogEdit = (item) => {
        console.log("edit");
        // const url=item && item['url'];
        //     const urlStr=url && url['url'];
        //     const {dialogList}=this.state;
        //     const {sessionId}=this.props;
        //     if(urlStr){
        //        saveInLocalStorage('dialog',dialogList);//保存该次的会话记录
        //        saveInLocalStorage('sessionId',sessionId);
        //        location.href=urlStr;
        //    }
    }
    handleLoaded = () => {
        this.setState({
            loaded: true,
        })
    }
    handleMasker = () => {
        // this.setState({
        // 	showMasker:true,
        // })
        if (this.wrapper1) {
            console.log("wrapper1 height is " + this.wrapper1.getCardHeight());
        }
        if (this.wrapper2) {
            console.log("wrapper2 height is " + this.wrapper2.getCardHeight());
        }
    }
    handleMainpageClick = (e) => {
        console.log("handleMainpageClick");
    }
    updateRate = (rate) => {
        console.log("rate is " + rate);
    }
    handleAnswerClick = () => {
        console.log("hei answer!");
    }

    render() {
        const item = {
            className: "chatbot-dialog", "text": "您什么时候回来呢？", id: 2, "kdIntention": {
                "intention": "BUS_TRIP", "intentionName": "出差申请",
                "kdWordslots": [{"normalizedWord": "2018-09-19", "number": "user_b_t", "originalWord": "明天", "score": 0, "wordslotType": "2"},
                    {"normalizedWord": "北京", "number": "user_e_l", "originalWord": "北京", "score": 0, "wordslotType": "location"}],
                "say": "您什么时候回来呢？", "score": 0, "sessionId": "3cd9d602-c688-488c-9b9b-dd326711b1e3", "status": "confirm"
            }, "type": "TEXT"
        }
        const kdIntention = item['kdIntention'];
        const reason = "";
        const {hasSubmit} = this.state;
        return (
            <div>
                <Answer style={{lineHeight: '23px', padding: '8px 12px 8px 16px'}} str={`Hi~我是小K,下面是我学会的技能，快让我表演给你看吧`}
                        onClick={this.handleAnswerClick} canClick={true}
                />
                <RecommendCard data={this.data} className={'ai-rc-card'} desc={'Hi~我是小K,下面是我学会的技能,快让我表演给你看吧?'}/>
                <div onClick={this.handleLoaded}>
                    loaded
                </div>
                <div onClick={this.handleMasker}>
                    showMasker
                </div>
                <TypeIn ref={el => this.wrapper1 = el}
                        title={reason ? reason : DIALOG_TITLE}
                        className={`ai-ti-demo`}
                        say="您什么时候回来呢？"
                        kdIntention={kdIntention}
                        content={() => this.handleDialogContent(kdIntention['kdWordslots'])}
                        onSubmit={() => {
                            console.log('点击了查看详情')
                        }}

                        imgPath={imgPath}
                        loaded={this.state.loaded}
                        showMasker={this.state.showMasker}
                        isFinished={true}
                        onSubmitStr={'查看详情1'}
                >
                    {item.type === 'URL' ? this[urlMapping[kdIntention['intention']]] : null}
                </TypeIn>

                <TypeIn ref={el => this.wrapper2 = el} showBody={false} say="您什么时候回来呢？" className={`ai-ti-demo`}>

                </TypeIn>
                <BackIcon onIconClick={this.handleMainpageClick} visible={true}/>
                <Loading londingStr={'正在跳转...'} visible={false}>

                </Loading>
            </div>
        )
    }
}

export default DialogPage;

/*
*        <RecommendCard data={this.data} className={'ai-rc-card'} desc={'Hi~我是小K,下面是我学会的技能,快让我表演给你看吧?'}></RecommendCard>
	               // <div className={`loc ${b_loc!=SOURCE_ADDRESS ? 'loc_fill' : ''}`}>{b_loc}</div>
	               // <div className={`loc ${b_loc!=TARGET_ADDRESS ? 'loc_fill' : ''}`}>{e_loc}</div>

	               // <div className={`time ${b_t!=BEGIN_TIME ? 'time_fill' : ''}`}>{b_t}</div>
	               // <div className={`time ${b_t!=BACK_TIME ? 'time_fill' : ''}`}>{e_t}</div>
*/