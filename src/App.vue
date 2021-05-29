<template>

  <div id="app">
      <preloader />
    <app-header />
    <div>
      <router-view></router-view>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";



export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter
  },
};
</script>


<style>
:root{
  --main-color:#feba67
}
/* body {
  background-color: #e2e2e2 !important;
} */

#app {
  overflow-x: hidden;
}
nav{
  background:#273649 !important;

}
h2::after{
  content: '';
  height: 4px;
  width: 60px;
  background:var(--main-color);
  display: block;
  margin: 10px auto;
  border-radius: 20px;
}

</style>
