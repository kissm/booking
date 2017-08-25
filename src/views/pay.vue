
	<template>
		<div class="mobile">
			<!--header 开始-->
			<header>
				<div class="header">
					<a class="new-a-back" href="javascript:history.back();"> <i class="icon-fanhui"></i> </a>
					<h2>确认订单</h2>
				</div>
			</header>
			<!--header 结束-->
			<!--main-->
			<div class="main pay">
				<ul class="item first-item">
					<li>
						<p><span class="type fl">台球馆</span></p>
						<p><i class="position-ico2"></i><span>利尔达物联网科技园2号楼2楼201室</span></p>
					</li>
				</ul>
				<ul class="item pay-price">
					<li>
						<div class="wh-pri">
							<p class="where">1号馆</p>
						</div>
						<div class="wh-time-pri">
							<p><span>2016-06-15   09:00-10:00</span><span class="price fr">￥52</span></p>
							<p><span>2016-06-15   10:00-11:00</span><span class="price fr">￥52</span></p>
							<p><span>2016-06-15   09:00-10:00</span><span class="price fr">￥52</span></p>
							<p><span>2016-06-15   10:00-11:00</span><span class="price fr">￥52</span></p>
							<p><span>2016-06-15   09:00-10:00</span><span class="price fr">￥52</span></p>
						</div>
					</li>
					<li>
						<div class="wh-pri">
							<p class="where">2号馆</p>
						</div>
						<div class="wh-time-pri">
							<p><span>2016-06-15   09:00-10:00</span><span class="price fr">￥52</span></p>
							<p><span>2016-06-15   10:00-11:00</span><span class="price fr">￥52</span></p>
						</div>
					</li>
					<li class="cl"><span class="total fr">合计：￥104</span></li>
				</ul>
				<ul class="link">
					<li>
						<span>备注</span>
						<input type="text" placeholder="请在这里留下您的需求">
					</li>
				</ul>
				<div class="item">
					<div class="check">
						<em class="ico-uncheck"  @click="invoice" id="invoiceBtn"></em>
						<span>我要开发票</span>
					</div>
				</div>
				<div class="invoice" id="invoice" style="display:none;">
					<h3 class="title">我要开发票</h3>
					<p class="tip">公司开票请填写纳税人识别号或统一社会信用代码。请填写快递信息，申请发票后将在3-5个工作日后安排寄出，快递费到付</p>
				    <ul class="invoice-message">
				    	<li>
				    		<span>发票抬头</span>
						    <input type="text" placeholder="请输入发票抬头" id="iname">
				    	</li>
				    	<li>
				    		<span>公司税号</span>
						    <input type="text" placeholder="请输入纳税人识别号或统一社会信用代码" id="inum">
				    	</li>
				    	<li>
				    		<span>邮寄地址</span>
						    <input type="text" placeholder="快递到付" id="iaddr">
				    	</li>
				    </ul>
				</div>
				<div class="item">
					<div class="check">
						<em class="ico-uncheck"  @click="protocol" id="protocol"></em>
						<span>我已阅读<a>《场地预约条款》</a></span>
					</div>
				</div>
				<div class="tip-text">
					<h3>订场须知：</h3>
					<p>1. 提前X小时退订可退全款，N小时内将无法退款</p>
					<p>2. 可进场时间为订场时间前15分钟</p>
				</div>
			</div>
			<footer class="ydBtn">
				<a class="ydBtn" @click="sure">确定支付</a>
			</footer>
		</div>
	</template>

	<script type="text/ecmascript-6">
        import api from '../utils/api'
        import { MessageBox } from 'mint-ui'
        export default{
            data(){
                return{

                }
            },
            created(){

            },
            methods:{
                invoice:function (e) {
                    $(e.currentTarget).toggleClass("ico-check");
                    let check = $(e.currentTarget).hasClass("ico-check");
					let invoice=$("#invoice");
					if(check){
						invoice.slideDown();
					}else{
						invoice.slideUp();
					}
                },
                protocol:function (e) {
                    $(e.currentTarget).toggleClass("ico-check");
                },
                sure:function () {
                    let _this=this;
                    if(!$('#protocol').hasClass("ico-check")){
                        MessageBox.alert('请阅读《场地预约条款》', '提示');
                    }else if($('#invoiceBtn').hasClass("ico-check")){
                        if(!$('#iname').val()){
                            MessageBox.alert('请输入发票抬头', '提示');
                        }else if(!$('#inum').val()){
                            MessageBox.alert('请输入纳税人识别号或统一社会信用代码', '提示');
                        }else if(!$('#iaddr').val()){
                            MessageBox.alert('请输入邮寄地址', '提示');
                        }else{_this.pay()}
                    }else{
                        _this.pay()
                    }

                },
                pay:function () {
                    let _this = this;
                    let data = {

                    };
                    window.location.href="record";
                },
                weixinPay:function(data){
                    let _this= this;
                    if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', _this.onBridgeReady(data), false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', _this.onBridgeReady(data));
                            document.attachEvent('onWeixinJSBridgeReady',_this.onBridgeReady(data));
                        }
                    }else{
                        _this.onBridgeReady(data);
                    }
                },
                onBridgeReady:function (data) {
                    let _this=this;
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            "appId":data.appId,     //公众号名称，由商户传入
                            "timeStamp":data.timeStamp, //时间戳，自1970年以来的秒数
                            "nonceStr":data.nonceStr, //随机串
                            "package":data.package,
                            "signType":data.signType, //微信签名方式：
                            "paySign":data.paySign //微信签名
                        },
                        function(res){
                            if(res.err_msg == "get_brand_wcpay_request:ok" ) {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                                if(_this.delivery_mode=="1"){
                                    _this.$alert("请到民宿前台领取", "提示", {customClass: 'alert',callback: function () {
                                        setTimeout(function () {
                                            window.location.href = 'goodsOrder';
                                            _this.disable=false;
                                        }, 500);
                                    }});
                                }else if(_this.delivery_mode=="2"){
                                    _this.$alert("请耐心等待工作人员送货", "提示", {customClass: 'alert',callback: function () {
                                        setTimeout(function () {
                                            window.location.href = 'goodsOrder';
                                            _this.disable=false;
                                        }, 500);
                                    }});
                                }else if(_this.delivery_mode=="3"){
                                    _this.$alert("酒店发货后,请注意查收快递", "提示", {customClass: 'alert',callback: function () {
                                        setTimeout(function () {
                                            window.location.href = 'goodsOrder';
                                            _this.disable=false;
                                        }, 500);
                                    }});
                                }

                            } else{
                                _this.$alert("您取消了支付或支付未成功", "提示", {customClass: 'alert',callback: function () {
                                    setTimeout(function () {
                                        window.location.href = 'goodsOrder';
                                        _this.disable=false;
                                    }, 500);
                                }});
                            }
                        }
                    );
                }
            }
        }
//
	</script>

