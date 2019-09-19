import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Recommend from './views/recommend/recommend'
import Search from './views/search/search'
import Rank from './views/rank/rank'
import Singer from './views/singer/singer'
export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/recommend'
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/singer',
            component:Singer
        }
    ]
})
