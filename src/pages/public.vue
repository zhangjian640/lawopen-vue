<template>
    <div class="container">
      <div class="main">
        <ul class="check-items">
          <router-link to="/public/punish" tag="li">
          </router-link>
          <router-link  to="/public/power" tag="li">
          </router-link>
          <router-link to="/public/case" tag="li">
          </router-link>
          <router-link to="/public/decision" tag="li">
          </router-link>
          <router-link to="/public/law" tag="li">
          </router-link>
          <li class="last-item"><img src="../assets/images/case/txt_chaxunxuzhi.png"/></li>
        </ul>
        <router-view></router-view>
      </div>
      <ul v-show="isShowQR" class="qr-code-wrap">
        <li class="qr-code"><img src="../assets/images/case/ewm.png" alt="二维码"></li>
        <li class="msg">扫一扫,关注公众号,获取信息更方便!</li>
        <li class="close-btn" @click="closeQR">关闭</li>
      </ul>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        isShowQR: true
      }
    },
    methods: {
      closeQR () {
        this.isShowQR = !this.isShowQR;
      }
    }
  }
</script>
<style lang="less" scoped>
  .wh(@w,@h){
      width:@w;
      height: @h;
  }
  .container{
    .wh(1065px,575px);
    position: relative;
    top:110px;
    margin: 0 auto;
    .main{
      .wh(907px, 575px);
      background: url(../assets/images/case/body_bg.png) no-repeat;
      .check-items{
        height: 85px;
        padding-left: 224px;
        padding-top: 20px;
        li{
          .wh(60px,85px);
          float: left;
          margin-right: 24px;
          cursor: pointer
        }
        .last-item{
          margin-left: 58px;
        }
        li:nth-child(1){
          background: url(../assets/images/case/btn1.png) no-repeat;
          &.router-link-active{
            background: url(../assets/images/case/btn1_active.png) no-repeat;
          }
        }
        li:nth-child(2){
          background: url(../assets/images/case/btn2.png) no-repeat;
           &.router-link-active{
            background: url(../assets/images/case/btn2_active.png) no-repeat;
          }
        }
        li:nth-child(3){
          background: url(../assets/images/case/btn3.png) no-repeat;
          &.router-link-active{
            background: url(../assets/images/case/btn3_active.png) no-repeat;
          }
        }
        li:nth-child(4){
          background: url(../assets/images/case/btn4.png) no-repeat;
          &.router-link-active{
            background: url(../assets/images/case/btn4_active.png) no-repeat;
          }
        }
        li:nth-child(5){
          background: url(../assets/images/case/btn5.png) no-repeat;
          &.router-link-active{
            background: url(../assets/images/case/btn5_active.png) no-repeat;
          }
        }
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
              background-image: url(../assets/images/case/input_mobile.png);
            }
            .check-code{
              background-image: url(../assets/images/case/input_bianma.png);
            }
            .verification-code{
              background-image: url(../assets/images/case/input_yanzhengma.png);
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
              background: url(../assets/images/case/btn_denglu.png);
              &:hover{
                background: url(../assets/images/case/btn_denglu_hover.png);
              }
            }
            .back-btn{
              float: right;
              background: url(../assets/images/case/btn_back.png);
              &:hover{
                background: url(../assets/images/case/btn_back_hover.png);
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
            background: url(../assets/images/case/btn_more.png);
            cursor: pointer;
            margin: 10px;
            &:hover{
              background: url(../assets/images/case/btn_more_hover.png);
            }
          }
        }
      }
    }
    .qr-code-wrap{
      .wh(140px, 208px);
      position: absolute;
      top: 44px;
      right: 0;
      background: url(../assets/images/case/ewm_bg.png);
      .qr-code{
        .wh(121px, 123px);
        padding:12px 9px 0;
      }
      .msg{
        margin-top: 5px;
        text-align: center;
      }
      .close-btn{
        height: 22px;
        background: #d0d0d0;
        text-align: center;
        cursor: pointer;
        &:hover{
          color:#ffffff;
        }
      }
    }
  }
</style>