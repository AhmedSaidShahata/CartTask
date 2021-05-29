<template
  ><div>
    <!--=============================== Start Hello Section ============================-->
    <div class="hello ">
      <img src="/img/home2.jpg" alt="" />
      <div
        class="overlayer d-flex flex-column justify-content-center align-items-center align-content-center text-center "
      >
        <div class="over-layer">
          <p>Special Diccount</p>
          <p>Find High Quality</p>
          <p class="font-weight-bold">
            For Fashion
          </p>
          <button class="btn add-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <!--=============================== Start decribtion Section ============================-->

    <div class="describtion">
      <div class="container">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex justify-content-center">
              <div class="mx-3">
                <i class="far fa-smile"></i>
              </div>
              <div>
                <p class="font-weight-bold mb-0">100% Satisfication</p>
                <p>if you are unable</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 border-right">
            <div class="d-flex justify-content-center">
              <div class="mx-3">
                <i class="far fa-thumbs-up"></i>
              </div>
              <div>
                <p class="font-weight-bold mb-0">Save 20% when you</p>
                <p>use credit card</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 border-right">
            <div class="d-flex justify-content-center">
              <div class="mx-3">
                <i class="fas fa-plane"></i>
              </div>
              <div>
                <p class="font-weight-bold mb-0">Fast Free Shipment</p>
                <p>Load any computers</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex justify-content-center">
              <div class="mx-3">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div>
                <p class="font-weight-bold mb-0">14-Day Money back</p>
                <p>if you are unable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--=============================== Start decribtion Section ============================-->

    <div class="choose">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div
              class="choosing d-flex justify-content-between align-items-center align-content-center"
            >
              <div>
                <img src="/img/car.png" />
              </div>
              <div>
                <p class=" mb-1 font-weight-bold">
                  Free Delivery Spend Over $250
                </p>
                <p class="text-center">Some Areas Excluded.Standard Only.</p>
              </div>
              <div>
                <img src="/img/tree.png" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="choosing d-flex justify-content-between align-items-center align-content-center"
            >
              <div>
                <img src="/img/headphone.png" />
              </div>
              <div>
                <p class=" mb-1 font-weight-bold">
                  Have Questions? We Can Help
                </p>
                <p class="text-center">Some Areas Excluded.Standard Only.</p>
              </div>
              <div>
                <img src="/img/tree.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <product-list />
    </div>

    <div
      class="view-more d-flex justify-content-center align-items-center flex-column "
    >
      <p>Shop Pepperfry Sofas</p>
      <button class="btn btn-dark">
        View More
      </button>
    </div>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";

export default {
  components: { ProductList },
};
</script>
<style scoped>
.hello {
  position: relative;
  height: 84vh;
  background-size: 100% 100%;
  overflow: hidden;
}
.hello p:first-of-type {
  font-size: 20px;
  color: var(--main-color);
}
.hello p:nth-child(2) {
  font-size: 30px;
  background: var(--main-color);
  color: black;
  padding: 5px 53px 10px 54px;
}

.hello p:nth-child(3) {
  font-size: 40px;
}

.hello img {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: animation_slider 40s infinite ease-in-out;
}
.hello .overlayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

.hello .over-layer {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 52px 153px;
  box-shadow: 0 0 10px black;
}
.hello .add-cart {
  background: var(--main-color);
}

.describtion {
  padding: 59px 10px;
  /* background: var(--main-color); */
}

.describtion i {
  font-size: 25px;
}

.describtion .border-right {
  border-right: 3px solid #f4f4f4 !important;
}

.choosing {
  padding: 20px 10px;
  background: #f4f4f4;
}
.choosing p:first-of-type {
  font-size: 20px;
}
.choosing p:last-of-type {
  font-size: 13px;
}

.view-more {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;
  height: 400px;
  background-attachment: fixed;
}
.view-more p {
  font-size: 50px;
  color: var(--main-color);
}
.view-more button {
  background: var(--main-color);
  padding: 10px 30px;
  color: black;
}
@keyframes animation_slider {
  0% {
    transform-origin: bottom;
  }
  15% {
    transform-origin: left;
    transform: scale(1.1);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.3);
  }
  65% {
    transform-origin: right;
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.1);
    transform-origin: top;
  }
  100% {
    transform: scale(1);
  }
}
</style>
