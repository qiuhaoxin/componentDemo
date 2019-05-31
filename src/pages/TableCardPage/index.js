

import React from 'react';
import {TableDataCard} from 'aicomponents'

import Styles from './index.less';

export default  class TableCardPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){

		let tableData1 = {
			data: [
				{
					排名: 1,
					机构名称: "广州分公司",
					完成率: '180%',
					实际数量: "480万"
				}, {
					排名: 2,
					机构名称: "武汉分公司",
					完成率: '172%',
					实际数量: "468万"
				}, {
					排名: 3,
					机构名称: "北京分公司",
					完成率: '160%',
					实际数量: "420万"
				}, {
					排名: 4,
					机构名称: "杭州分公司",
					完成率: '158%',
					实际数量: "397万"
				}, {
					排名: 5,
					机构名称: "佛山分公司",
					完成率: '140%',
					实际数量: "330万"
				},
			],
			headKeyNames: [
				"排名", "机构名称", "完成率", "实际数量"
			],
			title: '金蝶中国分机构收款排名',
			updateTime: '2019.03.21'
		}
       return <div className={`${Styles["wrapper"]}`}>
		   <TableDataCard data={tableData1}/>
       </div>
	}
}

