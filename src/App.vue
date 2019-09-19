<template>
  <div id="app">
    <router-view></router-view>
    <Tab class="tab"></Tab>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>

<style>
  body{
    font-size: 14px;
    height: 100vh;
  }
 html{
    background: #fff;
    height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
  body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
  h1, h2, h3, h4, h5, h6{ font-size:100%; }
  address, cite, dfn, em, var { font-style:normal; }
  code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
  ul, ol { list-style:none; }
  a { text-decoration:none; }
  a:hover { text-decoration:underline; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  legend { color:#000; }
  fieldset, img { border:0; }
  button, input, select, textarea { font-size:100%; }
  .tab{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
