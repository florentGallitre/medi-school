import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ListPage from '@/views/ListPage.vue'
import ItemPage from '@/views/ItemPage.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/list-page/:section',
        name: 'ListPage',
        component: ListPage,
        children: [
            {
                path: '/:slug',
                component: ItemPage,
            }

        ]
    },
]

const router = new VueRouter({
    routes,
    //do NOT user mode: "history" or "abstract", we need hastags
    //mode: "history",
    mode: "hash",
})

export default router
