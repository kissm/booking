import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/booking/',
    routes: [
        {
            path: '/',
            redirect:'index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        }
    ]
})

