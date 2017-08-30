import Vue from 'vue'
import Router from 'vue-router'
import api from '../utils/api'
import {MessageBox} from 'mint-ui'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/booking/',
    routes: [
        {
            path: '/',
            redirect:'spot'
        },
        {
            path: '/index',
            name: 'index',
            component: require('../views/index.vue')
        },
        {
            path: '/spot',
            name: 'spot',
            beforeEnter: check,
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

function check(to, from, next) {
    api.getPlace().then(response => {
        console.log(response[0].id)
        if (response.length >1) {
            next();
        } else {
            window.location.href = '/booking/index?id='+response[0].id;
        }
    },error => {
        MessageBox.alert('接口调用失败', "提示", {customClass: 'alert'});
    });

}
