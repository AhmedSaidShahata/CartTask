<template>
     <section class="who_us py-5 text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="box">
                        <div class="custom_border"></div>
                        <div class="face face1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="face face2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2 class="my-3">About <span>us</span></h2>
                 
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, fugit in? Dolorum, sit eum quaerat totam voluptates illum magnam mollitia, ut corporis tempore facere a eaque optio provident aliquam repellendus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit iusto porro obcaecati deleniti, magni hic aut ipsam incidunt eum distinctio doloribus autem consequatur aspernatur ipsa perspiciatis inventore soluta veritatis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit iusto porro obcaecati deleniti, magni hic aut ipsam incidunt eum distinctio doloribus autem consequatur aspernatur ipsa perspiciatis inventore soluta veritatis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit iusto porro obcaecati deleniti, magni hic aut ipsam incidunt eum distinctio doloribus autem consequatur aspernatur ipsa perspiciatis inventore soluta veritatis?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style >

.who_us {
  /* color: white; */
  background: linear-gradient(-45deg, white 60% , var(--main-color) 40%);
  border-top: 70px solid var(--main-color);
  /* border-bottom: 70px solid white; */
}

.who_us h2 {
  color: var(--main-color);
  font-size: 40px;
  font-weight: bolder;
   text-shadow:  1px 1px 1px red , 1px 1px 1px blue, 2px 2px 2px black , -2px -2px 2px white;
}

.who_us h2 span {
  color:black;
}

.who_us .row > div:last-of-type {
  padding-left: 50px;
  /* text-shadow: 2px 2px 10px black; */
}

.who_us .box {
  height: 500px;
  position: relative;
  box-shadow: 4px 4px 10px black, -4px -4px 10px black;
}
.who_us .box .custom_border {
  position: absolute;
  height: 90%;
  border: 10px solid white;
  width: 90%;
  z-index: 4;
  left: 50%;
  transform: translate(-50%, 6%);
}

.who_us .box .face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.who_us .box .face span {
  width: 20%;
  height: 100%;
  transition: 0.5s;
  background-size: cover;
  background-repeat: no-repeat;
}

.who_us .box .face.face1 span {
  background-image: url(/img/shake2.jpeg);
  transform-origin: top;
}

.who_us .box:hover .face.face1 span {
  transform: rotateX(90deg) translateY(-50%);
}

.who_us .box .face.face2 span {
  background-image: url(/img/shake1.jpeg);
  transform-origin: bottom;
  transform: rotateX(90deg) translateY(50%);
}

.who_us .box:hover .face.face2 span {
  transform: rotateX(0deg) translateY(0);
}

.who_us .box .face span:nth-child(1) {
  background-position-x: 0;
  transition-delay: 0s;
}

.who_us .box .face span:nth-child(2) {
  background-position-x: -100px;
  transition-delay: 0.1s;
}

.who_us .box .face span:nth-child(3) {
  background-position-x: -200px;
  transition-delay: 0.2s;
}

.who_us .box .face span:nth-child(4) {
  background-position-x: -300px;
  transition-delay: 0.3s;
}

.who_us .box .face span:nth-child(5) {
  background-position-x: -400px;
  transition-delay: 0.4s;
}

.who_us .box .face span:nth-child(6) {
  background-position-x: -500px;
  transition-delay: 0.5s;
}


</style>