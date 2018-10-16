<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
export default {
  name: 'App',
  components:{
    Header
  }
};
</script>
<style>
  *{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
ul li{  
list-style-type:none;  
}  
body{
  background-color: #ededed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  width: 1300px;
  max-width: 80%;
  margin: auto;
}
</style>
