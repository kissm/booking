<template>
    <div id="tabfirst" class="tab weekTab swiper-container1">
        <ul class="cl swiper-wrapper" style="height:auto;background:#357dc4;">
            <li v-for="(date,index) in dateList" :class="[curDate === index ? 'nowpage':'', 'swiper-slide']" @click="selectDate(index)">
                <p>{{date.date | sub}}</p>
                <a href="#">{{date.week | weekChinese}}</a>
            </li>
        </ul>
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev swiper-button-white"></div>-->
        <!--<div class="swiper-button-next swiper-button-white"></div>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import api from '../utils/api'
    import {addDate} from '../utils/date'

    export default {
        data() {
            return {
                dateList: [],
                curDate: 0
            }
        },
        created() {
            api.getBookingDays().then(response => {
                let days = response
                let i = 0
                let now = new Date()
                for (days; days > 0; days--) {
                    let now_day = new Date(addDate(now, i)).getDay()
                    let now_date = addDate(now, i)
                    this.dateList.push({
                        week: now_day,
                        date: now_date
                    });
                    i++
                }
                console.log(this.dateList)
            })
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
            selectDate(index) {
                this.curDate = index;
            }
        },
        filters: {
            sub(val) {
                return val.substr(5,5).replace('-','.')
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