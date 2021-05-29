<template>
  <div>
    <preloader />
    <hello />
    <who-us />
    <div class="bg">
      <describtion />
      <choosing />
    </div>
    <product-list />
    <view-more />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import Hello from "../components/Hello";
import Describtion from "../components/Describtion";
import Choosing from "../components/Choosing";
import ViewMore from "../components/ViewMore";
import WhoUs from "../components/WhoUs";
import Preloader from "../components/Preloader";

export default {
  components: {
    ProductList,
    Hello,
    Describtion,
    Choosing,
    ViewMore,
    WhoUs,
    Preloader,
  },
};
</script>
<style scoped>
.bg {
}
</style>
