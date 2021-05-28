<template>
  <div class="row product mt-5" v-if="product">
    <div class="col-4">
      <img class="w-100" :src="product.image"/>
    </div>
    <div class="col-8">
      <h3>{{product.title}}</h3>
      <p>{{product.price}} $</p>
    
      <p class="mt-4">
       {{product.description}}
      </p>
      <button class="btn btn-success" @click="addToCart()"> <i class="fas fa-cart-plus"></i>Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product:this.product,
                quantity:1
            })
        }
    },
  mounted() {
    this.$store.dispatch("getProduct",this.id);
  },
};
</script>

<style>

.product{
 animation:scaling 2s cubic-bezier(0.785, 0.135, 0.15, 0.86); 
}
</style>
