import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import RobotBuilder from '../builder/RobotBuilder';
import PartInfo from '../parts/PartInfo';
import BrowseParts from '../parts/BrowseRouter';
import RobotArms from '../parts/RobotArms'
import RobotBases from '../parts/RobotBases'
import RobotHeads from '../parts/RobotHeads'
import RobotTorsos from '../parts/RobotTorsos'
import SidebarBuild from '../sidebars/SidebarBuild';
import SidebarStandard from '../sidebars/SidebarStandard';


Vue.use(Router);

export default new Router({
    routes:[{
        path:'/',
        name: 'Home',
        components:{
            default: HomePage,
            sidebar: SidebarStandard
        }
    },
    {
        path:'/build',
        name: 'Build',
        components:{
            default: RobotBuilder,
            sidebar: SidebarBuild
        }
    },
    // Params must be declared later **** IMPORTANT
    {
        path: '/parts/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children:[
            {
                name:  'BrowseHeads',
                path: 'heads',
                component: RobotHeads,
            },
            {
                name:  'BrowseArms',
                path: 'arms',
                component: RobotArms,
            },
            {
                name:  'BrowseTorsos',
                path: 'torsos',
                component: RobotTorsos,
            },
            {
                name:  'BrowseBases',
                path: 'bases',
                component: RobotBases,
            }
        ]

    },
    {
        path:'/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
    },

    ]
})