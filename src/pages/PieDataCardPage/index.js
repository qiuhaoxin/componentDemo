import React from 'react';
import {PieDataCard} from 'aicomponents'

import Styles from './index.less';

export default class PieDataCardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const pieData = {
            "data": [
                {
                    "a": "1",
                    "name": "苍穹",
                    "percent": 0.47
                },
                {
                    "a": "1",
                    "name": "星空",
                    "percent": 0.33
                },
                {
                    "a": "1",
                    "name": "EAS",
                    "percent": 0.2
                }
            ],
            "title": "金蝶中国收入结构",
            "type": "pie",
            "updateTime": "2019.03.23",
            "xAxisKeyName": "name",
            "yAxis": [
                {
                    "chartType": "pie",
                    "keyName": "percent"
                }
            ]
        }

        return <div className={`${Styles["wrapper"]}`}>
            <PieDataCard data={pieData}/>
        </div>
    }
}

