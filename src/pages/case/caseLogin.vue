<template>
  <div class="content">
    <ul class="left-content">
      <li><img src="../../assets/images/check/title_ajcx.png"/></li>
      <li>
        <label for="phoneNum">
          <span>手机号码&nbsp;:&nbsp;</span>
          <input type="text" id="phoneNum"  v-model="phone" class="input-area phone-num">
        </label>
      </li>
      <li>
        <label for="checkCode">
          <span>查询编码&nbsp;:&nbsp;</span>
          <input type="text" id="checkCode" v-model="serial_number" class="input-area check-code">
        </label>
      </li>
      <li>
        <label for="verificationCode">
          <span>验&nbsp;&nbsp;证&nbsp;&nbsp;码&nbsp;:&nbsp;</span>
          <input type="text" id="verificationCode" class="input-area verification-code">
        </label>
      </li>
      <li class="btns">
        <div class="btn login-btn" @click="check_in"></div>
        <div class="btn back-btn"  @click="searchBack"></div>
      </li>
    </ul>
    <ul class="right-content">
      <li>一、查询刑事案件、治安(行政)案件办理状态;</li>
      <li>二、查询涉案财物措施、照片;</li>
      <li>三、查询案件投诉或直接投诉反馈结果;</li>
      <li>四、请妥善管理您的案件查询编码,勿轻易删除或转告他人;</li>
      <li>五、网上查询结果仅供参考,请以公安机关实际案卷材料为准;</li>
      <li class="btn"><div class="more-btn"></div></li>
    </ul>
  </div>
</template>
<script>
// import config from '../../assets/js/config'
  export default {
    data() {
      return {
        phone: '',
        serial_number: ''
      }
    },
    methods: {
      check_in(){
        this.$router.push('/public/caseList')
        // var that = this
        // let option = {
        //   phone_num: this.phone,
        //   serial_num: this.serial_number
        // }
        // this.$http.get('/api/check_in', {
        //   // params:{
        //   //   phone_num: this.phone,
        //   //   serial_num: this.serial_number
        //   // }
        // })
        // .then(function (res){
        //   let data = res.data
        //   console.log(data)
        //   // if (data['data'] == true) {
        //     that.$router.push('/public/caseList')
        //   // }
        // })
        // .catch(function(err){
        //   console.log(err)
        // })
      },
      searchBack(){
        this.$router.push('/')
      }
    }

  }
</script>
<style lang="less" scoped>
  .wh(@w,@h){
      width:@w;
      height: @h;
  }

  .content{
    .wh(907px, 469px);
    .left-content{
      .wh(358px, 450px);
      margin-top: 19px;
      margin-left: 124px;
      float: left;
      li{
        clear: both;
        margin: 8px 0;
        label{
          display: block;
          &>span{
            display: inline-block;
            width: 90px;
            height: 45px;
            line-height: 45px;
            text-align: justify;
            font-size: 16px;
            color: #5c5a5a;
          }
        }
        .input-area{
          .wh(260px, 45px);
          text-indent: 48px;
          font-size: 16px;
          background-repeat: no-repeat;
          background-color: transparent;
          border:none;
          padding:0;
          float: right;
        }
        .phone-num{
          background-image: url(../../assets/images/check/input_mobile.png);
        }
        .check-code{
          background-image: url(../../assets/images/check/input_bianma.png);
        }
        .verification-code{
          background-image: url(../../assets/images/check/input_yanzhengma.png);
        }
      }
      .btns{
        margin-top: 40px;
        .btn{
          .wh(170px, 36px);
          cursor: pointer;
        }
        .login-btn{
          float: left;
          background: url(../../assets/images/check/btn_denglu.png);
          &:hover{
            background: url(../../assets/images/check/btn_denglu_hover.png);
          }
        }
        .back-btn{
          float: right;
          background: url(../../assets/images/check/btn_back.png);
          &:hover{
            background: url(../../assets/images/check/btn_back_hover.png);
          }
        }
      }
    }
    .right-content{
      .wh(310px,370px);
      margin-top: 99px;
      margin-right: 55px;

      float: right;
      li{
        float: left;
        color:#798490;
        font-size: 16px;
        margin: 8px;
      }
      .btn{
        .wh(110px, 39px);
        background: url(../../assets/images/check/btn_more.png);
        cursor: pointer;
        margin: 10px;
        &:hover{
          background: url(../../assets/images/check/btn_more_hover.png);
        }
      }
    }
  }
  
</style>