
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
				<ul class="item">
					<li>
						<p><span class="type fl">台球馆</span><span class="where">1号馆</span></p>
						<p><i class="position-ico2"></i><span>利尔达物联网科技园2号楼2楼201室</span></p>
					</li>
					<li>
						<p><span>2016-06-15 09:00-10:00</span><span class="fr">￥52</span></p>
						<p><span>2016-06-15 10:00-11:00</span><span class="fr">￥52</span></p>
						<p class="cl"><span class="total fr">合计：￥104</span></p>
					</li>
				</ul>
				<ul class="link">
					<li>
						<span>联系方式</span>
						<input type="text" placeholder="请输入联系方式">
					</li>
					<li>
						<span>备注</span>
						<input type="text" placeholder="请输入联系方式">
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
                    if(!$('#protocol').hasClass("ico-check")){
                        MessageBox.alert('请阅读《场地预约条款》', '提示');
                    }else if($('#invoiceBtn').hasClass("ico-check")){
                        if(!$('#iname').val()){
                            MessageBox.alert('请输入发票抬头', '提示');
                        }else if(!$('#inum').val()){
                            MessageBox.alert('请输入纳税人识别号或统一社会信用代码', '提示');
                        }else if(!$('#iaddr').val()){
                            MessageBox.alert('请输入邮寄地址', '提示');
                        }else{alert("pay")}
                    }else{
                        alert("pay")
                    }

                },
                pay:function () {
                    
                }
            }
        }
//
	</script>

