<template>
  <div>
    <preloader />
    <div class="container checkout">
      <h2 class="text-center heading">CheckOut Cart</h2>
      <div
        v-if="cart.length == 0"
        class="mt-5 d-flex justify-content-center align-content-center align-items-center  alert alert-danger"
      >
        <p>No Products Yet</p>
      </div>
      <div v-else>
        <div class="mb-4"  v-for="item in cart" :key="item.product.id">
          <div class="border-bottom">
            <div>
              <div>
                <img class="product-image" :src="item.product.image" />
              </div>
              <strong>{{ item.product.title }}</strong>
              <br />
              {{ item.quantity }} x {{ item.product.price }}
            </div>
            <div>
              <button
                @click.prevent="clearProductFromCart(item.product)"
                class="btn btn-danger text-white px-3 py-0 mb-4 "
              >
                remove
              </button>
            </div>
          </div>
        </div>
        <p>Total price: $ {{ cartTotalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '../components/Preloader';
export default {
  components:{
    Preloader
  },
  methods: {
    clearProductFromCart(product) {
      this.$store.dispatch("deleteCartItem", product);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },
  },
  computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
  },

  mounted() {},
};
</script>

<style scoped>
.checkout {
  min-height: 100vh;
}
.heading::after {
  content: "";
  width: 140px;
}
.product-image {
  width: 119px;
  height: 100px;
}
</style>
