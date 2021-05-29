<template>
  <div>
    <preloader />
    <hello />
    <who-us />
    <div class="bg">
      <describtion />
      <choosing />
    </div>
     <category/>
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
import Category from "../components/Category";

export default {
  components: {
    ProductList,
    Hello,
    Describtion,
    Choosing,
    ViewMore,
    WhoUs,
    Preloader,
    Category
  },
};
</script>
<style scoped>
.bg {
  background: linear-gradient(45deg, white 85%, var(--main-color) 35%);
  border-top: 70px solid var(--main-color);
}

.bg2 {
  background: linear-gradient(-45deg, white 90%, var(--main-color) 35%);
  height: 100px;
  background: linear-gradient(-207deg, white 90%, var(--main-color) 35%);
  height: 100px;
}
</style>
