import asyncComponent from '../utils/asyncComponent.js';
import asyncComponentWithBack from '../utils/asyncComponentWithBack.js';
// export const nav=[

//     {id:1,name:'填单类卡片',exact:true,path:'/typein',component:asyncComponent(()=>import('../pages/TypeInPage'))},
//     {id:2,name:'财务指标卡片',exact:true,path:'/numbercardconfig',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
//     {id:3,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
//     {id:4,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},

//     {id:5,name:'反馈类卡片',exact:true,path:'/feekback',component:asyncComponent(()=>import('../pages/Feekback'))},
//     {id:6,name:'引导卡片',exact:true,path:'/recommend',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
//     {id:7,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
//     {id:8,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},
// ]



export const nav = [
    {
        id: 0,
        module: 'Component',
        children: [
            {
                id: 0,
                name: '流程卡片',
                children: [
                    {id: 0, name: '填单类卡片', exact: true, path: '/typein', component: asyncComponent(() => import('../pages/TypeInPage'))},
                    {id: 1, name: '财务指标卡片', exact: true, path: '/numbercardconfig', component: asyncComponent(() => import('../pages/NumberCardConfig'))},
                    {id: 2, name: '1号报表卡片', exact: true, path: '/numberone', component: asyncComponent(() => import('../pages/NumberOnePage'))},
                    {id: 3, name: '滑动列表卡片', exact: true, path: '/slidelist', component: asyncComponent(() => import('../pages/SlideListPage'))},
                ]
            }, {
                id: 1,
                name: '辅助卡片',
                children: [
                    {id: 4, name: '反馈类卡片', exact: true, path: '/feekback', component: asyncComponent(() => import('../pages/Feekback'))},
                    {id: 84, name: '单个意图的引导语卡片', exact: true, path: '/SingleRecommend', component: asyncComponent(() => import('../pages/SingleRecommend'))},

                    {id: 5, name: '应用多于三个引导卡片', exact: true, path: '/recommend', component: asyncComponent(() => import('../pages/RecommendPage'))},
                ]

            }, {
                id: 2,
                name: '功能组件',
                children: [
                    {id: 8, name: 'Input可编辑', exact: true, path: '/input', component: asyncComponent(() => import('../pages/Inputpage'))},

                ]
            },
            {
                id: 3,
                name: '图表卡片',
                children: [
                    // {id: 9, name: '饼状图卡片', exact: true, path: '/feekback1', component: asyncComponent(() => import('../pages/Feekback'))},
                    // {id: 9, name: '', exact: true, path: '/feekback1', component: asyncComponent(() => import('../pages/Feekback'))},
                    {id: 10, name: '柱状图卡片', exact: true, path: '/histogram', component: asyncComponentWithBack(() => import('../pages/Histogram'))},
                    {id: 11, name: '折线图卡片', exact: true, path: '/lineCard', component: asyncComponentWithBack(() => import('../pages/LineCardPage'))},
                    {id: 12, name: '分组柱状图卡片', exact: true, path: '/slidelist1', component: asyncComponentWithBack(() => import('../pages/GroupHistogramCardPage'))},
                    {id: 112, name: '表格卡片', exact: true, path: '/TableCardPage', component: asyncComponentWithBack(() => import('../pages/TableCardPage'))},
                    {id: 8112, name: '组合图卡片', exact: true, path: '/CombineDataCard', component: asyncComponentWithBack(() => import('../pages/CombineDataCardPage'))},
                    {id: 81132, name: '饼图', exact: true, path: '/PieDataCardPage', component: asyncComponentWithBack(() => import('../pages/PieDataCardPage'))},

                ]
            },
            {
                id: 4,
                name: 'Scroll',
                children: [
                    {id: 8, name: '页面滚动', exact: true, path: '/scroll', component: asyncComponent(() => import('../pages/ReactScrollPage'))},
                ]
            },
            {
                id: 5,
                name: '旧Examples内容',
                children: [
                    {id: 81, name: 'DialogList', exact: true, path: '/dialogList', component: asyncComponent(() => import('../pages/Dialog'))},
                    {id: 82, name: 'ExpandList', exact: true, path: '/ExpandList', component: asyncComponent(() => import('../pages/ExpandList'))},
                    {id: 812, name: 'InputSample', exact: true, path: '/InputSample', component: asyncComponent(() => import('../pages/InputSample'))},
                ]
            }
        ]

    }, {
        id: 1,
        module: 'API',
        children: [
            {
                id: 0,
                name: '云之家API',
                children: [
                    {id: 13, name: '播报接口', exact: true, path: '/yzj', component: asyncComponent(() => import('../pages/YzjAPipage'))},
                ]
            },
        ]
    }
]