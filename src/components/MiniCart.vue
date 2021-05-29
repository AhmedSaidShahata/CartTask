<template>
  <div
    id="cart"
    class="dropdown-menu p-2"
    style="min-width:320px;
    right:0;
    left:auto"
    aria-labelledby="triggerId"
  >
    <div
      v-for="item in cart"
      :key="item.product.id"
      class="px-2 d-flex justify-content-between"
    >
      <div>
        <div>
          <hr />
          <img class="product-img mr-2" :src="item.product.image" />
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x {{ item.product.price }} $
        </div>
        <div>
          <button
            @click.prevent="clearProductFromCart(item.product)"
            class="btn btn-danger text-white  py-0 mb-1 "
          >
            remove
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total : ${{ cartTotalPrice }}</span>
      <a href="" @click.prevent="clearCartItems()">Clear Cart</a>
      <router-link to="/checkout">checkout</router-link>
    </div>
  </div>
</template>

<script>
export default {
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

<style>
.product-img {
  width: 70px;
  height: 70px;
}
</style>
