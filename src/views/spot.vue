<template>
	<div class="mobile">
  <!--header 开始-->
  <header>
    <div class="header">
      <h2>场地介绍</h2>
      <div class="head_right"> <a class="user" href="record"> </a> </div>
    </div>
  </header>
  <!--header 结束-->  
  <!--main-->
  <div class="main">
  	<a class="main-item" :href="'index?id='+spot.id" v-for="spot in spotList">
      <div class="main-img">
      	<img :src=spot.img>
      	<p class="CDphone">
      		<span class="name">{{spot.name}}</span>
      		<a class="phone-ico" :href="'tel:'+spot.mobile"></a>
      	</p>
      </div>
      <div class="CDmessage">
      	<p>
      		<i class="position-ico"></i>
      		<span style="display: inline">{{spot.address}}</span>
      	</p>
      	<p class="text">{{spot.introduce}}</p>
      </div>
    </a>
  </div>
</div>
</template>

<script>
    import api from '../utils/api'
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        created(){
            this.$store.dispatch('getPlace');

        },
        mounted(){
            $(document).ready(function(){
                $(".qiuc").addClass("hover");
            });
        },
        computed: {
            ...mapGetters([
                'spotList'
            ]),

        },
        methods:{

        }
    }
</script>