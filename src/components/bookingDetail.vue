<template>
    <div class="top98">
        <div class="CDList nowCon cl">
            <ul class="CDname fl">
                <li v-for="room in rooms" @click="getRoomInfo(room.id)">{{room.name}}</li>
            </ul>
            <div class="slide" id="slide">
                <div class="slide-area">
                    <ul class="time-list">
                        <li v-for="time in timeList">{{time}}</li>
                    </ul>
                    <ul class="item-list" v-for="room in rooms">
                        <li v-for="item in room.rooms">
                            <div v-if="item.is_occupy === 0">
                                <input :id="'time_'+item.id" class="radio" name="shijian" type="checkbox" @click="select(item,room,$event)">
                                <label :for="'time_'+item.id" class="trigger">
                                    <p class="money">￥{{item.price}}</p>
                                </label>
                            </div>
                            <p v-else="item.is_occupy === 0" class="bggrey">已过期</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import api from '../utils/api'
    import {mapGetters} from 'vuex'
    import {timetrans} from '../utils/date'

    export default {
        data() {
            return {
                timeList: [],
                room_id: '',
                selectedList: []
            }
        },
        computed: {
            ...mapGetters([
                'timeInfo','rooms','selectedDate'
            ])
        },
        watch: {
            timeInfo(val) {
                let start = parseInt(val.time_start)
                let time = val.unit
                this.timeList.push(val.time_start)
                while (start < parseInt(val.time_end)) {
                    this.timeList.push(timetrans(val.time_start, time));
                    time += val.unit
                    if (val.unit === 30) {
                        start += 0.5
                    } else {
                        start++
                    }
                }
                let _this = this
                this.$nextTick(() => {
                    let slideLiW = $(".slide .time-list li").width()
                    let slideLiN = _this.timeList.length
                    let ulW = (slideLiW + 1) * slideLiN
                    $(".slide .slide-area .time-list").width(ulW)
                })
            },
            rooms(val) {
                this.room_id = val[0].id
            },
            room_id(val) {
                this.$store.dispatch('getRoomInfo', val)
            }
        },
        methods: {
            getRoomInfo(id) {
                this.room_id = id
            },
            select(item,room,event) {
                if(event.target.checked) {
                    if(!this.selectedList.hasOwnProperty(room.name)) {
                        this.$set(this.selectedList, room.name, []);
                    }
                    let data = {
                        room_id: room.id,
                        room_name: room.name,
                        date: this.selectedDate.date
                    }
                    console.log(room)
                    console.log(item)
                    this.selectedList[room.name].push(data)
                }
                console.log(this.selectedList)
//                this.$store.commit('setSelected', this.selectedList)
            }
        }
    }
</script>