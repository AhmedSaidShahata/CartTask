<template>
  <div class="py-5 products">
    <h2 class="my-3 text-center">Pro<span>ducts</span></h2>
    <div class="container">
      <div class="header-products row justify-content-between">
        <div class="col-md-7 px-0">
          <p class="deal font-weight-bolder">Today's Best Deal</p>
        </div>
        <div class="d-flex col-md-5 px-0  filter justify-content-between ">
          <p class="mx-3 active">
            Featured
          </p>
          <p class="mx-3">
            Best Seller
          </p>
          <p class="mx-3">
            Special
          </p>
          <p class="mx-3">
            Latest
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-3 col-lg-4 col-md-6 col-9 mt-4"
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
              <h5 class="card-title">
                {{ product.title.substring(0, 20) }}...
              </h5>
              <strong class="price">${{ product.price }}.00 </strong>

              <span class="old-price">
                $200.00
              </span>
              <div class="rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p class="card-text">
                {{ product.description.substring(0, 50) }}...
              </p>
            </div>

            <div class="px-4 pb-3">
              <button
                class="btn btn-success cart-btn btn-block border-0"
                @click="addToCart(product, index)"
              >
                <i class="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        window.pageXOffset || document.documentElement.scrollLeft;

      let ImageLeft = rectImg.left + scrollLeft;

      productImage.style.top = 300 + "px";
      productImage.style.left = window.innerWidth - ImageLeft - 150 + "px";

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
.products {
  background: linear-gradient(45deg, white 91%, var(--main-color) 35%);
  border-top: 70px solid var(--main-color);
}

.header-products {
  border-bottom: 3px solid #e5e5e5;
}
.header-products .deal {
  font-size: 28px;
}

.header-products .filter p {
  font-size: 18px;
  color: gray;
}

.header-products .filter p.active {
  color: black !important;
}
.products h2 {
  color: var(--main-color);
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 50px !important;
  text-shadow:  1px 1px 1px red , 1px 1px 1px blue, 2px 2px 2px black , -2px -2px 2px white;
}

.products h2 span {
  color: black;
}
.deal::after {
  content: "";
  display: block;
  margin: 0;
  background: orange;
  width: 100px;
  height: 3px;
  position: relative;
  top: 19px;
}
.card {
  height: 400px;
  box-shadow: 0 0 10px #e4e4e4;
  transition: all 1s;
}

.card .price {
  font-size: 18px;
}
.card .category {
  position: absolute;
  transform: rotate(-31deg);
  background: var(--main-color);
  color: black;
  top: 33px;
  width: 129px;
  text-align: center;
  padding: 7px 0;
  box-shadow: 0 0 10px black;
}

.card .old-price {
  text-decoration: line-through;
  color: gray;
}
.card .link:hover {
  text-decoration: none;
}
.card .rate {
  color: orange;
}
.card .cart-btn {
  color: black;
  background: var(--main-color);
}

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

@media (max-width: 991px) {
  .deal::after {
    content: "";
    display: none;
  }
  .deal {
    padding: 0 10px;
  }
}
</style>
