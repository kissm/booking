<template>
    <ul class="time-list">
        <li v-for="time in timeList">{{time}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
    import api from '../utils/api'
    import {mapGetters} from 'vuex'
    import {timetrans} from '../utils/date'
    export default {
        data() {
            return {
                timeList: []
            }
        },
        computed:{
            ...mapGetters([
                'timeInfo'
            ])
        },
        watch: {
            timeInfo(val) {
                let start = parseInt(val.time_start)
                let time = val.unit
                this.timeList.push(val.time_start)
                while(start < parseInt(val.time_end)) {
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
                    $('.slide').each(function () {
                        let slideLiW = $(".slide .time-list li").width()
                        let slideLiN = _this.timeList.length
                        let ulW = (slideLiW + 1) * slideLiN
                        let itemlistW = (slideLiW + 1) * (slideLiN - 1)
                        console.log(itemlistW)
                        $(".slide .slide-area").width(ulW)
                        $(".slide ul.item-list").width(itemlistW)
                    })
                })
            }
        }
    }
</script>