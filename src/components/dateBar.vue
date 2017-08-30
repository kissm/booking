<template>
    <div id="tabfirst" class="tab weekTab swiper-container1">
        <ul class="cl swiper-wrapper" style="height:auto;background:#357dc4;">
            <li v-for="(date,index) in dateList" :class="[curDate === index ? 'nowpage':'', 'swiper-slide']"
                @click="selectDate(index,date)">
                <p>{{date.date | sub}}</p>
                <a>{{date.week | weekChinese}}</a>
            </li>
        </ul>
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev swiper-button-white"></div>-->
        <!--<div class="swiper-button-next swiper-button-white"></div>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                curDate: 0,
            }
        },
        created() {
            this.$store.dispatch('getDateList')
            this.$store.dispatch('getPlaceTimes')
        },
        computed: {
            ...mapGetters([
                'dateList','rooms'
            ]),
        },
        watch: {
            dateList(val) {
                this.$store.dispatch('getRooms', val[this.curDate])
                this.$store.commit('setSelectedDate',val[this.curDate])
            },
            curDate(val) {
                this.$store.dispatch('getRooms', this.dateList[val])
                this.$store.commit('setSelectedDate',this.dateList[val])
            }
        },
        mounted() {
            let mySwiper = new Swiper('.swiper-container1', {
                pagination: '.swiper-pagination1',
                resistanceRatio: 0,
                slidesPerView: 7,
                slidesPerGroup: 7,
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
        },
        methods: {
            selectDate(index,date) {
                this.curDate = index
            }
        },
        filters: {
            sub(val) {
                return val.substr(5, 5).replace('-', '.')
            },
            weekChinese(val) {
                switch (val) {
                    case 0:
                        return '日';
                        break;
                    case 1:
                        return '一';
                        break;
                    case 2:
                        return '二';
                        break;
                    case 3:
                        return '三';
                        break;
                    case 4:
                        return '四';
                        break;
                    case 5:
                        return '五';
                        break;
                    case 6:
                        return '六';
                        break;
                }
            }
        }
    }
</script>