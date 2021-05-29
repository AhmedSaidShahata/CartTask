<template>
     <div
      class="view-more d-flex justify-content-center align-items-center flex-column "
    >
      <p>Shop Pepperfry Sofas</p>
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