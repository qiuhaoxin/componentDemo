
import asyncComponent from '../utils/asyncComponent.js';
export const nav=[

    {id:1,name:'填单类卡片',exact:true,path:'/typein',component:asyncComponent(()=>import('../pages/TypeInPage'))},
    {id:2,name:'财务指标卡片',exact:true,path:'/numbercardconfig',component:asyncComponent(()=>import('../pages/NumberCardConfig'))},
    {id:3,name:'1号报表卡片',exact:true,path:'/numberone',component:asyncComponent(()=>import('../pages/NumberOnePage'))},
    {id:4,name:'滑动列表卡片',exact:true,path:'/slidelist',component:asyncComponent(()=>import('../pages/SlideListPage'))},
]