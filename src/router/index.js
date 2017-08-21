import Vue from 'vue'
import Router from 'vue-router'
import Select from '../views/selectSpot'
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
        },
        {
            path: '/selectSpot',
            name: 'selectSpot',
            component: Select
        },
        {
            path: '/booking',
            name: 'booking',
            component: require('../views/booking.vue')
        }
    ]
})

