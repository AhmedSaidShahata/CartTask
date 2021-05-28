<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid px-5">
        <div class="nav navbar-nav">
          
          <router-link to="/" class="nav nav-item nav-link">Home</router-link>
          <router-link to="/checkout" class="nav nav-item nav-link" >checkout</router-link>
       
        </div>
        <div>
       <div>
       
       </div>
        </div>
        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle py-3" 
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
           
            {{cartItemCount}}
            
             <i class="fas fa-shopping-cart"></i>
              cart
            </button>
            <div  @click="$event.stopPropagation()">

                 <mini-cart/>
            
            </div>
            
          
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    import MiniCart from './MiniCart'

export default {
  computed:{
    cartItemCount(){
      return this.$store.getters.cartItemCount
    }
  },
    components:{MiniCart}
};
</script>

<style>
nav{
  z-index: 99;
  padding: 0 !important;
}
.logo{
  width:100px;
  height:30px

}

</style>
