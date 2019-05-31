import React, {Component} from 'react';
import Styles from './index.less';
import {SingleRecommendCard} from 'aicomponents';

import chailv from '../../images/image_chailv.png'

class NumberCardPage extends Component {

    render() {

        let appTitle = '财务指标查查查'
        let appMessage = [
            "查一下白金公司这个月的现金", "青岛分公司10月现金是多少", "我要看去年1月的销售额"
        ]

        return (
            <div className={`${Styles["content"]}`}>
                <SingleRecommendCard bgImg={chailv} appTitle={appTitle} appMessage={appMessage}/>
            </div>
        )
    }
}

export default NumberCardPage;


