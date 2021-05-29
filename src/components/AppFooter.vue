<template>
  <footer>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="my-2">
            <h2 class="my-3">E-commerce</h2>
          </div>
          <div class="my-2">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dignissimos praesentium.
            </p>
          </div>
          <div class="my-2">
            <h3>Contact Us</h3>
            <div>
              <i class="fas fa-phone-alt fa-x mr-2"></i>
              <span>+01067770640</span>
            </div>
            <div>
              <i class="fas fa-envelope fa-x mr-2"></i>
              <span>E-commerce@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="footer_info">
            <h2 class="my-3">Information</h2>
            <ul class="list-unstyled">
              <li>About Us</li>
              <li>More Search</li>
              <li>Blog</li>
              <li>Testimonial</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <h2 class="my-3">Helpful Links</h2>
          <ul class="list-unstyled">
            <li>Services</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonial</li>
            <li>Events</li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <h2 class="my-3">subscribe</h2>
          <ul class="list-unstyled">
            <li>Services</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonial</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div class="copyright mt-5">
        <p>Copyright &copy; 2020 Made By <span>Ahmed Said</span></p>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
/* start footer */

h2::after {
  content: "";
  width: 0;
  margin-top: 10px;
}
footer {
  padding: 40px 10px;
  /* background: #273649; */
      
    /* color:var(--main-color); */
}

footer h3 {
  color: var(--main-color);
}

footer .row {
  border-top: 4px solid var(--main-color);
  border-bottom: 4px solid var(--main-color);
  padding: 10px;
}

footer .copyright p {
  font-size: 24px;
}
footer .copyright p span {
  font-size: 24px;
  color: var(--main-color);
  font-weight: 1000;
  /* text-shadow: 6px 6px 10px red, -6px -6px 10px blue, 8px 8px 10px black , -8px -8px 10px black; */
}
</style>
