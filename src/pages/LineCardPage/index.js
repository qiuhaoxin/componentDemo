import React from 'react';
import {
    LineDataCard,

} from 'aicomponents'

import Styles from './index.less';

class LineCardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lineData2 = {
            data: [
                {
                    month: "1月",
                    value: 20
                },
                {
                    month: "2月",
                    value: 50
                },
                {
                    month: "3月",
                    value: 20
                },
                {
                    month: "4月",
                    value: 80
                },
                {
                    month: "5月",
                    value: 40
                },
                {
                    month: "6月",
                    value: 53
                },
                {
                    month: "7月",
                    value: 59
                }
            ],
            title: "金蝶云产品续签率",
            type: "line",
            updateTime: "2019.03.23",
            xAxisKeyName: "month",
            yAxis: [
                {
                    chartType: "line",
                    keyName: "value"
                }
            ]
        }

        return <div className={`${Styles["wrapper"]}`}>
            <LineDataCard data={lineData2}/>
        </div>
    }
}

export default LineCardPage;