import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ListPage from '@/views/ListPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/list/:slug',
        name: 'ListPage',
        component: ListPage
    },
]

const router = new VueRouter({
    routes,
    //do NOT user mode: "history" or "abstract", we need hastags
    //mode: "history",
    mode: "hash",
})

export default router
