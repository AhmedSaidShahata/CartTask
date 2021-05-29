<template>
      <div v-if="showPreloader" ref="preloader" class="loading-spinner">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.Preloader();
    this.hidePreloder();
  },
  data: () => {
    return {
      showPreloader: true,
    };
  },
  methods: {
    hidePreloder() {
      let preloader = this.$refs.preloader;
      let opacityValue = 1;
      setTimeout(() => {
        let opacityPrloader = setInterval(() => {
          preloader.style.opacity = opacityValue;
          opacityValue -= 0.04;
 
        }, 50);
        setTimeout(() => {
          clearTimeout(opacityPrloader);
          this.showPreloader = false;
        }, 1000);
      }, 500);
    },
    Preloader() {
  
    },
  },
};
</script>

<style scoped>

.loading-spinner {
    background-color: white;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 99999999999999999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    top: 0;
    left: 0;
}
.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ripple div {
    position: absolute;
    border: 5px solid var(--main-color);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

</style>
