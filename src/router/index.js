import Vue from 'vue'
import Router from 'vue-router'

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
            component: require('../views/index.vue')
        },
        {
            path: '/spot',
            name: 'spot',
            component: require('../views/spot.vue')
        },
        {
            path: '/booking',
            name: 'booking',
            component: require('../views/booking.vue')
        },
        {
            path: '/pay',
            name: 'pay',
            component: require('../views/pay.vue')
        },
        {
            path: '/record',
            name: 'record',
            component: require('../views/record.vue')
        },
        {
            path: '/detail',
            name: 'detail',
            component: require('../views/detail.vue')
        }
    ]
})

