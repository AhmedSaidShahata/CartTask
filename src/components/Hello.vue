<template>
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
</template>

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
  width: 286px;
  padding: 10px 0;
}

.hello p:nth-child(3) {
  font-size: 40px;
}

.hello img {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: animation_image 40s infinite ease-in-out;
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
@keyframes animation_image {
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
