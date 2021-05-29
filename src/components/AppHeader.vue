<template>
  <div>
    <nav class="navbar navbar-expand py-2">
      <div class="container-fluid px-1 px-md-5">
        <div class="nav navbar-nav">
          <img
            class="logo"
            src="https://www.pngkey.com/png/detail/251-2510486_logo-ecom-e-commerce-logo.png"
          />
        </div>
        
        <div class="col-md-8 d-none d-md-block ">
          <form class="form-inline my-2 my-lg-0">
            <div class="form-group col-md-2 p-0">
              <select id="inputState" class="cat form-control w-100">
                <option selected>All Categories</option>
                <option>Men</option>
                <option>Women</option>
                <option>Children</option>
              </select>
            </div>
            <div class="col-md-8  p-0">
              <input
                class="search w-75 form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="search-btn btn btn-outline-success my-2 my-sm-0 border-0 text-dark"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle py-2"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }}

              <i class="fas fa-shopping-cart"></i>
              cart
            </button>
            <div @click="$event.stopPropagation()">
              <mini-cart />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar2 navbar-expand bg-white py-2">
      <div class="container-fluid px-1 px-md-5">
        <div class="nav navbar-nav">
          <router-link
            to="/"
            class="nav nav-item nav-link text-dark border-right"
            >Home</router-link
          >
          <router-link
            to="/checkout"
            class="nav nav-item nav-link border-right text-dark"
            >checkout</router-link
          >
         
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <img class="hand" src="/img/hand.png" alt="">
          New User Zone
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";

export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  components: { MiniCart },
};
</script>

<style>
 .search-btn {
  background: var(--main-color) !important;
}
.hand{
  width: 30px;
  height: 30px;
}
.search {
  border-radius:0px 2px 2px 0px  !important
} 
.cat{
 border-radius:2px 0px 0px 2px  !important
}
.navbar {
  z-index: 99;
  padding: 0 !important;
}
.navbar2{
  z-index: 9;
}

.logo {
  width: 100px;
  height: 40px;
}
</style>
