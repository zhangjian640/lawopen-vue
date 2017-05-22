<template>
  <div>
    <img class="bg" src="../assets/images/index/background2.jpg">
    <div class="app-head">
      <div class="logo"><img src="../assets/images/index/logo_01.png"/></div>
      <div class="title"><img src="../assets/images/index/title.png"/></div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-foot">
      湖北省公安厅&nbsp;版权所有&nbsp;技术支持&nbsp;:&nbsp;北科软件&nbsp;&nbsp;版权所有&nbsp;&nbsp;未经协议授权禁止转载
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  //设置宽高
  .wh(@w,@h){
      width:@w;
      height: @h;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .bg{
    position:absolute;
    z-index: -1;
  }
  .app-head{
    height: 104px;
    .wh(790px,104px);
    text-align: center;
    position: relative;
    left: 0;
    right: 0;
    top:76px;
    margin: 0 auto;
    .logo{
      .wh(104px,104px);
        float: left;
    }
    .title{
      .wh(652px,78px);
      float: left;
      margin: 13px 15px;
    }
  }
  .app-foot {
    width: 800px;
    height: 30px;
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
