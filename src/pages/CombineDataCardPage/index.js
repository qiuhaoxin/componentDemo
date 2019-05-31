import React from 'react';
import {CombineDataCard} from 'aicomponents'

import Styles from './index.less';

export default class CombineDataCardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let combineData = {
            data: [
                {city: '北京', 实际数量: 500, 完成率: 0.9},
                {city: '武汉', 实际数量: 480, 完成率: 0.8},
                {city: '广州', 实际数量: 420, 完成率: 0.7},
                {city: '上海', 实际数量: 390, 完成率: 0.65},
                {city: '深圳', 实际数量: 370, 完成率: 0.6},
            ],
            xAxisName: 'city',
            yAxisName: '实际数量',
            yAxisName2: '完成率',
            title: '金蝶中国收款排名前五',
            updateTime: '2019.03.23'
        }

        return <div className={`${Styles["wrapper"]}`}>
            <CombineDataCard data={combineData}/>
        </div>
    }
}

