<template>
    <div>
        <div class="mobile">
            <!--header 开始-->
            <header>
                <div class="header">
                    <a class="new-a-back" href="javascript:history.back();"> <i class="icon-fanhui"></i> </a>
                    <h2>台球馆</h2>
                </div>
            </header>
            <!--header 结束-->
            <!--main-->
            <div class="main" id="main">
                <datebar></datebar>
                <bookingdetail></bookingdetail>
            </div>
            <ul class="colorTip">
                <li>
                    <i class="bggrey"></i>不可定
                </li>
                <li>
                    <i class="bgwhite"></i>可定
                </li>
                <li>
                    <i class="bgchecked"></i>已选择
                </li>
            </ul>
            <div class="select-message">
                <h3>基本信息</h3>
                <ul class="text-list">
                    <li>
                        场地信息<span>{{roomInfo.acreage}}㎡</span>
                    </li>
                    <li>
                        可容纳<span>{{roomInfo.contain}}人</span>
                    </li>
                    <li>
                        收费标准<span>{{roomInfo.charge_mode | fee(roomInfo.price,roomInfo.unit)}}</span>
                    </li>
                </ul>
                <h3>现场图</h3>
                <ul class="img-list">
                    <li v-for="(img,index) in imgList1" @click="swiperShow(index)">
                        <div class="img-box">
                            <img :src="img">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="swiper-tc" v-show="swiper_tc" @click="swiperHide">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="img in imgList">
                            <img height="364" :src="img"/>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <footer class="fixedFooter">
                <div class="bottomBtn">
                    <div class="btn">
                        <a class="yellow" id="order" @click="booking">立即预定</a>
                    </div>
                </div>
            </footer>
            <!--main-->
            <div style="height:54px;"></div>
        </div>
        <div class="Tc certifyTc" v-show="certifyTc">
            <div class="mengban" @click="certifyTcHide"></div>
            <div class="tcCon">
                <form class="form">
                    <div class="input-box">
                        <label>手机号</label>
                        <input type="text" placeholder="输入手机号码" v-model="phone" class="input">
                    </div>
                    <div class="input-box">
                        <label>验证码</label>
                        <input type="text" placeholder="输入验证码" id="certifycode" v-model="certifycode"
                               class="input certifycode">
                        <div class="btn-box">
                            <input type="button" class="btn" value="获取验证码" :disabled="disable" @click="getCertifyCode"/>
                        </div>
                    </div>
                </form>
                <p class="text">请输入联系方式，以便于我们及时与您联系 </p>
                <mt-spinner type="snake" :size="30" color="#ff7109" class="spinner" v-show="spinner"></mt-spinner>
                <div class="footer-box">
                    <a class="sure" @click.stop="certifyTcSure">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import datebar from '../components/dateBar.vue'
    import bookingdetail from '../components/bookingDetail.vue'
    import {MessageBox} from 'mint-ui'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                swiper_tc: false,
                imgList: [],
                swiper: null,
                certifyTc: false,
                disable: false,
                spinner: false,
                phone: '',
                certifycode: '',
            }
        },
        components: {
            datebar,
            bookingdetail
        },
        computed: {
            imgList1() {
                if (this.imgList.length > 3) {
                    return this.imgList.slice(0, 3)
                } else {
                    return this.imgList
                }
            },
            ...mapGetters([
                'roomInfo'
            ])
        },
        watch: {
            roomInfo(val) {
                this.imgList = val.img
            }
        },
        methods: {
            swiperShow(index) {
                this.swiper_tc = true
                this.$nextTick(() => {
                    this.swiper = new Swiper('.swiper-container', {
                        initialSlide: index,
                        loop: true,
                        pagination: '.swiper-pagination'
                    });
                })
            },
            swiperHide() {
                this.swiper_tc = false
                this.swiper.destroy(false, true)
            },
            booking() {
                if (true) { // 如果已经选择了场地
                    this.certifyTc = true
                }
            },
            certifyTcHide() {
                this.certifyTc = false
            },
            getCertifyCode(e) {
                let phoneReg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
                if (!phoneReg.test(this.phone)) {
                    MessageBox('提示', '请填写正确的手机号')
                    return false
                } else {
                    this.disable = true
                    let time = 60
                    /*等待时间*/
                    let _this = this
                    this.timer = setInterval(function () {
                        e.target.value = --time + "(s)"
                        console.log(time)
                        if (time == 0) {
                            clearInterval(_this.timer)
                            _this.disable = false
                            e.target.value = '重新获取验证码'
                        }
                    }, 1000)
                    //调用获取验证码接口
                }
            },
            certifyTcSure() {
                if (!this.certifycode) {
                    MessageBox('提示', '请输入验证码')
                    return false
                }
                this.spinner = true
                //调用验证接口
                setTimeout(() => {
                    this.certifyTc = false
                    clearInterval(this.timer)
                    this.$router.push('pay')
                }, 3000)
            },
        },
        filters: {
            fee(type, fee, unit) {
                if (type == 1) {
                    return `${fee}元/人`
                } else if (type == 2) {
                    if(unit == 30) {
                        return `${fee}元/半小时`
                    }
                    if(unit == 60) {
                        return `${fee}元/小时`
                    }
                }
            }
        }
    }
</script>