<template>
  <div>
    <hello/>
    <describtion/>
    <choosing/>
      <view-more/>

   
    <div class="container">
      <product-list />
    </div>

   
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import Hello from "../components/Hello";
import Describtion from "../components/Describtion";
import Choosing from "../components/Choosing";
import ViewMore from "../components/ViewMore";


export default {
  components: { ProductList,Hello,Describtion,Choosing,ViewMore},
};
</script>
<style scoped>



</style>
