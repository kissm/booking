<template>
	<div class="mobile">
  <!--header 开始-->
  <header>
    <div class="header">
		<a class="new-a-back" href="javascript:history.back();"> <i class="icon-fanhui"></i> </a>
      <h2>场地类型</h2>
      <div class="head_right"> <a class="user" href="record"> </a> </div>
    </div>
  </header>
  <!--header 结束--> 
  <!--main-->
  <div class="index-main">
  	<a href="tel:+15757856627" class="phone-line"><i class="icon-phone"></i>15757856627</a>
  	<div class="qiuc">
  		<img src="../assets/img/CDtaiQ.png">
  		<a class="changdi" href="booking">
  			<h3>会议室</h3>
  			<p>开放时间：9:00-24:00</p>
  		</a>
  	</div>
  	<div class="qiuc">
  		<img src="../assets/img/CDyuMao.png">
  		<a class="changdi" href="booking">
  			<h3>篮球场</h3>
  			<p>开放时间：9:00-24:00</p>
  		</a>
  	</div>
  	<div class="qiuc">
  		<img src="../assets/img/CDpingP.png">
  		<a class="changdi" href="booking">
  			<h3>瑜伽房</h3>
  			<p>开放时间：9:00-24:00</p>
  		</a>
  	</div>
  </div>
  <!--main-->
</div>
</template>

<script>
    import api from '../utils/api'
    export default {
        data(){
            return{

			}
		},
		created(){
            this.show();
		},
		methods:{
		    show:function () {
                $(document).ready(function(){
					$(".qiuc").addClass("hover");
				});
            }
		}
	}

</script>