/**
 * Created by lenovo on 2017/8/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import route from '../router'
import api from '../utils/api'
import {addDate} from '../utils/date'
import createLogger from '../utils/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        dateList: [], // 可提前预约的日期列表
        rooms: [], // 各场地及预定详情
        roomInfo: '',  // 场地基本信息
        timeInfo: '',  // 时间表
        selectedDate: '',// 用户选择的日期
        selected: []  // 用户选择的预定时间
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
        },
        setSelectedDate(state, data) {
            state.selectedDate = data
        },
        setSelected(state, data) {
          state.selected = []
          state.selected = data
        }
    },
    getters: {
        dateList: (state) => state.dateList,
        rooms: (state) => state.rooms,
        roomInfo: (state) => state.roomInfo,
        timeInfo: (state) => state.timeInfo,
        selected: (state) => state.selected,
        selectedDate: (state) => state.selectedDate
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
                date: date.date,
                week: date.week,
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