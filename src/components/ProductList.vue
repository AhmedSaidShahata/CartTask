<template>
  <div class="row justify-content-center">
    <div
      class="col-xl-3 col-lg-4 col-sm-6 col-9 mt-4"
      v-for="(product, index) in products"
      :key="product.id"
    >
      <div class="card text-left" ref="myCard">
        <span class="category">
          {{ product.category }}
        </span>
        <router-link
          class="link"
          :to="{ name: 'product', params: { id: product.id } }"
        >
          <img class="w-100" :src="product.image" alt="product image" />
        </router-link>

        <div class="card-body">
          <h5 class="card-title">{{ product.title.substring(0, 30) }}...</h5>
          <strong>price : {{ product.price }} $</strong>
          <p class="card-text">
            {{ product.description.substring(0, 70) }}
            ...
          </p>
        </div>

        <div class="px-4 pb-3">
          <button
            class="btn btn-success btn-block"
            @click="addToCart(product, index)"
          >
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductCard from "./ProductCard";
export default {
  components: {
    // ProductCard,
  },

  methods: {
    addToCart(product, index) {
      let productImage = document.createElement("img");
      let cardImage = this.$refs.myCard[index];
      productImage.src = product.image;
      cardImage.appendChild(productImage);

      productImage.classList.add("move-image");
      let postitionTop = 0;

      let rectImg = productImage.getBoundingClientRect();
      let scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let ImageTop = rectImg.top + scrollTop;
      console.log(ImageTop)
      let ImageLeft = rectImg.left + scrollLeft;

      productImage.style.top = 300 + "px";
      productImage.style.left = (window.innerWidth - ImageLeft -150) + "px";
  
    setInterval(() => {
        postitionTop -= 70;
        productImage.style.top = postitionTop + "px";
      }, 10);


      this.$store.dispatch("addProductToCart", {
        product,
        quantity: 1,
      });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>

body {
  background: #e2e2e2;
}

#app{
  overflow-x:hidden;
}
.card {
  height: 400px;
  box-shadow: 0 0 10px #e4e4e4;
  animation: scaling 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: all 1s;
}
.card .category {
  position: absolute;
  transform: rotate(-31deg);
  background: #28a745;
  color: white;
  top: 33px;
  width: 129px;
  text-align: center;
  padding: 7px 0;
  box-shadow: 0 0 10px black;
}
.card .link:hover {
  text-decoration: none;
}
/* .card:hover {
  transform: scale(1.1);
} */
@keyframes scaling {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.card .card-title {
  font-size: 18px;
}

.card img:first-of-type {
  height: 170px;
}
.move-image {
  transition: all 3s;
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  bottom: 0;
  z-index: 2;
}
</style>
