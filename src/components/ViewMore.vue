<template>
     <div
      class="view-more d-flex justify-content-center align-items-center flex-column "
    >
      <p class="mb-5">Shop Pepperfry Sofas</p>
      <button class="btn btn-dark">
        View More
      </button>
    </div>
</template>
<style scoped>

.view-more {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;
  height: 500px;
  background-attachment: fixed;
      border-radius: 273px 64px 271px 64px;
    box-shadow: 0px 0px 10px;

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


</style>