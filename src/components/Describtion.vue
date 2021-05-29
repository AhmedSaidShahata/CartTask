<template>
  <!--=============================== Start decribtion Section ============================-->

  <div class="describtion">
    <div class="container">
      <h2 class="my-3 text-center">Why <span>us</span></h2>
      <div class="row">
        <div class="col-lg-3 col-sm-6 border-right">
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
        <div class="col-lg-3 col-sm-6 border-right">
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
        <div class="col-lg-3 col-sm-6 border-right">
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
        <div class="col-lg-3 col-sm-6">
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
</template>
<style scoped>
.describtion {
  padding: 60px 10px;
  /* color:white; */
  /* background: var(--main-color); */
}

.describtion i {
  font-size: 25px;
}



.describtion h2 {
  color: var(--main-color);
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 50px !important;
  text-shadow: 1px 1px 1px red, 1px 1px 1px blue, 2px 2px 2px black,
    -2px -2px 2px white;
}

.describtion h2 span {
  color: black;
}

.describtion .border-right {
  border-right: 3px solid #f4f4f4 !important;
}

@media (max-width: 991px) {
  .describtion .border-right {
    border-right: 0px solid #f4f4f4 !important;
  }
}
</style>
