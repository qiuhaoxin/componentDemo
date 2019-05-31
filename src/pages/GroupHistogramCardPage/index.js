import React from 'react';
import {
    HistogramCard,
    LineDataCard,
    GroupHistogramCard
} from 'aicomponents'

import Styles from './index.less';

class GroupHistogramCardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const groupHistogramData = {
            data: [
                {name: '本年', 产品线: 'EAS.', 客户新增数量: 500},
                {name: '本年', 产品线: '星空.', 客户新增数量: 360},
                {name: '本年', 产品线: 'K3/WISE', 客户新增数量: 360},
                {name: '本月', 产品线: 'EAS.', 客户新增数量: 200},
                {name: '本月', 产品线: '星空.', 客户新增数量: 125},
                {name: '本月', 产品线: 'K3/WISE', 客户新增数量: 250},
                {name: '本年', 产品线: '1EAS.', 客户新增数量: 500},
                {name: '本年', 产品线: '1星空.', 客户新增数量: 360},
                {name: '本年', 产品线: '1K3/WISE', 客户新增数量: 360},
                {name: '本月', 产品线: '1EAS.', 客户新增数量: 200},
                {name: '本月', 产品线: '1星空.', 客户新增数量: 125},
                {name: '本月', 产品线: '1K3/WISE', 客户新增数量: 250}
            ],
            xAxisName: "产品线",
            yAxisName: "客户新增数量",
            groupBasis: 'name',
            title: '金蝶中国客户新增数量',
            updateTime: '2019.02.23'
        };
        return <div className={`${Styles["wrapper"]}`}>
            <GroupHistogramCard data={groupHistogramData}/>
        </div>
    }
}

export default GroupHistogramCardPage;