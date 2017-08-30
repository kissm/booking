/**
 * Created by lenovo on 2017/8/21.
 */
import axios from 'axios'
import {MessageBox} from 'mint-ui'
// const instance = axios.create({
//     baseURL: "/api/smart/",
//     timeout: 10000,
//     headers: {'Authorization': 'Bearer '+ Laravel.token, 'HOTEL' : Laravel.hotel_id},
// });
const instance = axios.create({
    baseURL: 'http://10.200.0.212:8088/api/'
});
// 拦截接口调用失败的情况
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    MessageBox.alert("接口调用失败,请尝试刷新", "提示");
    return Promise.reject(error);
});
export default {
    //GET
    getRoomInfo: (data) => {
        return new Promise((resolve, reject) => {
            instance.get('getRoomInfo', {
                params: {
                    id: data.id,
                    room_id: data.room_id
                }
            }).then(response => {
                let resData = response.data;
                if (resData.code == 200) {
                    resolve(resData.data);
                } else {
                    MessageBox.alert(resData.msg, "提示");
                }
            });
        })
    },
    getBookingDays: (data) => {
        return new Promise((resolve, reject) => {
            instance.get('getBookingDays', {
                params: {
                    id: data.id,
                    place_type_id: data.place_type_id
                }
            }).then(response => {
                let resData = response.data;
                if (resData.code == 200) {
                    resolve(resData.data);
                } else {
                    MessageBox.alert(resData.msg, "提示");
                }
            });
        })
    },
    getPlaceTimes: (data) => {
        return new Promise((resolve, reject) => {
            instance.get('getPlaceTimes', {
                params: {
                    id: data.id,
                    place_type_id: data.place_type_id
                }
            }).then(response => {
                let resData = response.data;
                if (resData.code == 200) {
                    resolve(resData.data);
                } else {
                    MessageBox.alert(resData.msg, "提示");
                }
            });
        })
    },
    getRooms: (data) => {
        return new Promise((resolve, reject) => {
            instance.get('getRooms', {
                params: {
                    id: data.id,
                    date: data.date,
                    week: data.week,
                    place_type_id: data.place_type_id
                }
            }).then(response => {
                let resData = response.data;
                if (resData.code == 200) {
                    resolve(resData.data);
                } else {
                    MessageBox.alert(resData.msg, "提示");
                }
            });
        })
    }
}