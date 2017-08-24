/**
 * Created by lenovo on 2017/8/21.
 */
import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)
export default {
  getSpotDetail: function () {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/getSpotDetail').then(response => {
                resolve(response.body)
            }, error => {
                resolve(response.body)
            })
        })
    }
}