/**
 * Created by lenovo on 2017/8/21.
 */
import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)
export default {
    getImgList: function () {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/getImgList').then(response => {
                resolve(response.body)
            }, error => {
                resolve(response.body)
            })
        })
    }
}