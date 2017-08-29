<template>
    <ul class="time-list">
        <li v-for="time in timeList">{{time}}:00</li>
    </ul>
</template>

<script type="text/ecmascript-6">
    import api from '../utils/api'
    export default {
        data() {
            return {
                timeList: []
            }
        },
        created() {
            let _this = this
            api.getPlaceTimes().then(response => {
                let time = parseInt(response.time_start);
                while(time <= parseInt(response.time_end)) {
                    this.timeList.push(time);
                    time++
                }
                this.$nextTick(() => {
                    $('.slide').each(function () {
                        let slideLiW = $(".slide .time-list li").width()
                        let slideLiN = _this.timeList.length
                        let ulW = (slideLiW + 1) * slideLiN
                        $(".slide .slide-area").width(ulW)
                        $(".slide ul").width(ulW)
                    })
                })
            })
        }
    }
</script>