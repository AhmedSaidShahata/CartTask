<template>
  <div>
    <preloader/>
    <div class="row product mt-5" v-if="product">
      <div class="col-lg-4 col-md-6">
        <img class="w-100" :src="product.image" />
      </div>
      <div class="col-lg-8 col-md-6">
        <h3>{{ product.title }}</h3>
        <p class="mb-2">price : {{ product.price }} $</p>
        <p class="mb-0">category : {{ product.category }} </p>

        <p class="mt-2">
          {{ product.description }}
        </p>
        <button class="btn btn-success" @click="addToCart()">
          <i class="fas fa-cart-plus"></i>Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "../components/Preloader";
export default {
  components: {
    Preloader,
  },
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>

<style>
.product {
  min-height: 100vh;
  padding: 10px 10px;
  animation: scaling 2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.product img {
  height: 500px;
}
</style>
