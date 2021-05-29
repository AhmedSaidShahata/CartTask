<template>
  <div class="categories">
    <div class="container">
      <h2 class="my-3 text-center">All<span> Categories</span></h2>
      <div class="row">
        <div class="col-md-6 mt-3">
          <div class="man ct">
            <img src="/img/man.jpeg" />
            <div
              class="overlay-cat d-flex justify-content-center align-content-center align-items-center"
            >
              <p>MAN</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-3">
          <div class="woman ct">
            <img src="/img/Woman.jpeg" />
            <div
              class="overlay-cat d-flex justify-content-center align-content-center align-items-center"
            >
              <p>Woman</p>
            </div>
          </div>
        </div>

        <div class="col-md-12 mt-3">
          <div class="children ct">
            <img src="/img/children.jpg" />
            <div
              class="overlay-cat d-flex justify-content-center align-content-center align-items-center"
            >
              <p>Children</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.categories {
  padding: 50px 0;
  background: linear-gradient(-45deg, white 87%, var(--main-color) 35%);
  border-top: 70px solid var(--main-color);
  
}

.categories img {
  width: 100%;
  height: 300px;
  transition: all 1s;
}


.categories .man,
.categories .woman ,
.categories .children {
  position: relative;
  overflow: hidden;
  border: 2px solid white;
  cursor: pointer;
}

.categories h2 {
  color: var(--main-color);
  font-size: 40px;
  font-weight: bolder;
   text-shadow:  1px 1px 1px red , 1px 1px 1px blue, 2px 2px 2px black , -2px -2px 2px white;
}
.categories h2::after {
 content: '';
width: 130px;
}

.categories  h2 span {
  color:black;
}

.categories .ct:hover img{
transform: scale(1.2);
}


.categories .overlay-cat {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  color: white;
  font-size: 40px;
  font-weight: bolder;
  border: 4px solid var(--main-color);
}
</style>
