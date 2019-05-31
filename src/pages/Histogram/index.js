

import React from 'react';
import {HistogramCard} from 'aicomponents'

import Styles from './index.less';

class Histogram extends React.Component{
	constructor(props){
		super(props);
	}
	render(){

		const histogramData = {
			data: [{
				year: '1951 年',
				sales: 38
			}, {
				year: '1952 年',
				sales: 52
			}, {
				year: '1956 年',
				sales: 61
			}, {
				year: '1957 年',
				sales: 145
			}, {
				year: '1958 年',
				sales: 48
			}, {
				year: '1959 年',
				sales: 38
			}, {
				year: '1960 年',
				sales: 38
			}, {
				year: '1962 年',
				sales: 38
			}],
			xAxisKeyName: "year",
			yAxis:[{
				chartType:"histogram",
				keyName:"sales"
			}] ,
			title: '金蝶中国产品线客户数量',
			updateTime: '2019.03.23'
		}
       return <div className={`${Styles["wrapper"]}`}>
		   <HistogramCard data={histogramData}/>
       </div>
	}
}

export default Histogram;