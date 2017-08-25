<template>
	<section>
	<div class="mobile">
		<!--header 开始-->
		<header>
			<div class="header">
				<a class="new-a-back" href="javascript:history.back();"> <i class="icon-fanhui"></i> </a>
				<h2>预约记录</h2>
			</div>
		</header>
		<!--header 结束-->
		<!--主题内容-->
		<section class="main">
			<div class="wrap">
				<div id="tabfirst" class="tab cl">
					<ul class="cl">
						<li class="home_1" :class="{nowpage:type===1}" @click="tab(1)">
							<a>全部<i class="radius">15</i></a>
						</li>
						<li class="home_2" :class="{nowpage:type===2}" @click="tab(2)">
							<a>已预约</a>
						</li>
						<li class="home_3" :class="{nowpage:type===3}" @click="tab(3)">
							<a>已完成</a>
						</li>
						<li class="home_4" :class="{nowpage:type===4}" @click="tab(4)">
							<a>已取消</a>
						</li>
					</ul>
				</div>
				<div class="top98">
					<!--未处理开始-->
					<div class="tabCon" :class="{nowCon:type===1}">
						<ul>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已预约</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="detail">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="detail">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<div class="cl">
									<a class="btn cancel" @click="cancel">取消订单</a>
								</div>
							</li>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已预约</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<div class="cl">
									<a class="btn cancel">取消</a>
								</div>
							</li>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已完成</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<!--未处理结束-->
					<!--服务记录开始-->
					<div class="tabCon" :class="{nowCon:type===2}">
						<ul>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已预约</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<div class="cl">
									<a class="btn cancel">取消</a>
								</div>
							</li>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已预约</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<div class="cl">
									<a class="btn cancel">取消</a>
								</div>
							</li>
						</ul>
					</div>
					<!--服务记录结束-->
					<!--服务记录开始-->
					<div class="tabCon" :class="{nowCon:type===3}">
						<ul>
							<li>
								<p class="head cl">
									<span class="fl">订单时间:  2016-06-23 14:00:22</span>
									<span class="state fr">已完成</span>
								</p>
								<div class="cl">
									<div class="text">
										<div class="where cl">
											<h3>台球场</h3><span class="price fr">￥208</span>
										</div>
									</div>
								</div>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">1号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
								<a class="cl cdText" href="bookDetail.html">
									<p class="cdName">2号场</p>
									<div class="ti-price cl">
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
										<p class="cl">
											<span class="fl">2016-06-15 09:00-10:00</span>
											<span class="fr">￥52</span>
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<!--服务记录结束-->
					<!--服务记录开始-->
					<div class="tabCon" :class="{nowCon:type===4}">
						<div class="shopNone">
							<img class="" src="../assets/img/icon-order-wu.png">
							<p>您还没有相关的订单</p>
						</div>
					</div>
					<!--服务记录结束-->
				</div>
			</div>
		</section>
		<div class="he50"></div>
		<!--主题内容-->

	</div>
	<div class="Tc cancelTc" style="display:none;">
		<div class="mengban"></div>
		<div class="tcCon">
			<h3>确定要取消预约吗？</h3>
			<p class="text">取消后，工作人员将会在3个工作日内联系您，将费用退回</p>
			<p>
				<a class="btn">不取消</a>
				<a class="btn">确定</a>
			</p>
		</div>
	</div>
	</section>
</template>
<script type="text/ecmascript-6">
    import api from '../utils/api'
    import { MessageBox } from 'mint-ui'
    export default{
        data(){
            return{
                type:1
            }
        },
        created(){

        },
        methods:{
            tab:function (index) {
                let _this=this;
                _this.type=index;
            },
            cancel:function () {
                MessageBox.confirm('取消后，工作人员将会在3个工作日内联系您，将费用退回', '确定要取消预约吗？').then(action => {
                    console.log(11111111)
                });
            }
        }
    }
</script>


		<!--<script>-->
			<!--$(document).ready(function() {-->
				<!--$(".cancel").bind("click"function() {-->
					<!--$(".cancelTc").css("display", "block");-->
				<!--});-->
				<!--$(".cancelTc .btn").bind("click", function() {-->
					<!--$(".cancelTc").css("display", "none");-->
				<!--});-->
			<!--});-->
		<!--</script>-->




