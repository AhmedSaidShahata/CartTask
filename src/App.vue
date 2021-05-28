<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>


<style>
h2::after{
  content: '';
  height: 4px;
  width: 60px;
  background:#28a745 ;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
}
.move-image{
  position: absolute;
  width: 100px !important;
  height: 100px !important;
}
</style>
