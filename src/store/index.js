/**
 * Created by lenovo on 2017/8/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import route from '../router'
import api from '../utils/api'
import {addDate} from '../utils/date'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dateList: [],
        rooms: [],
        roomInfo: '',
        timeInfo: ''
    },
    mutations: {
        getDates(state, data) {
            state.dateList = data
        },
        getRooms(state, data) {
            state.rooms = data
        },
        changeRoomInfo(state, data) {
            state.roomInfo = data
        },
        getTimeInfo(state, data) {
            state.timeInfo = data
        }
    },
    getters: {
        dateList: (state) => state.dateList,
        rooms: (state) => state.rooms,
        roomInfo: (state) => state.roomInfo,
        timeInfo: (state) => state.timeInfo
    },
    actions: {
        getDateList({commit}) {
            let data = {
                id: route.currentRoute.query.id,
                place_type_id: route.currentRoute.query.place_type_id
            }
            api.getBookingDays(data).then(response => {
                let days = response
                let i = 0
                let now = new Date()
                let dateList = []
                for (days; days > 0; days--) {
                    let now_day = new Date(addDate(now, i)).getDay()
                    let now_date = addDate(now, i)
                    dateList.push({
                        week: now_day,
                        date: now_date
                    });
                    i++
                }
                commit('getDates', dateList)
            })
        },
        getRooms({commit}, date) {
            let data = {
                id: route.currentRoute.query.id,
                date: date,
                place_type_id: route.currentRoute.query.place_type_id
            }
            api.getRooms(data).then(response => {
                commit('getRooms', response)
            })
        },
        getRoomInfo({commit}, room_id) {
            let data = {
                id: route.currentRoute.query.id,
                room_id: room_id
            }
            api.getRoomInfo(data).then(response => {
                commit('changeRoomInfo', response)
            })
        },
        getPlaceTimes({ commit }) {
            let data = {
                id: route.currentRoute.query.id,
                place_type_id: route.currentRoute.query.place_type_id
            }
            api.getPlaceTimes(data).then(response => {
                commit('getTimeInfo', response)
            })
        }

    }
})