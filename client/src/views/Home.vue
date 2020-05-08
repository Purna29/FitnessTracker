<template>
  <div class="wrapper">
    <div class="hero">
      <vue-flux :options="fluxOptions" :images="fluxImages" :transitions="Transitions" ref="slider"></vue-flux>
      <div class="overlay"></div>
      <div class="hero-content">
        
        <h1 class="title is-1 text-center text-light" >How Does 24/7 Fitness Help Me?</h1>
        
        <p class=" text-center  is-1 text-light px-4">Let 24/7 Fitness help you conquer this year. Track workouts, build support, challenge yourself and your friends, all with the help of our expert coaches.</p>
      
         <button class="button pointer is-medium is-primary mt-2" @click="$router.push({path:'/signup'})"><strong >Join Today</strong></button>
        
      </div>
    </div>
 </div>
</template>
<style >
.hero {
  position: relative;
}
.flux-image, .vue-flux {
  height: 540px!important;
}
.pointer {
  cursor: pointer;
}
.overlay {
  position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(57, 57, 58, 0.301568627450);
}
.hero-content {
  position: absolute;
    top: 40%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: 100;
    text-align: center;
}
</style>
<script>
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader
} from "vue-flux";
export default {
  data: () => ({
    fluxOptions: {
      autoplay: true,
      delay:2000
    },
    fluxImages: [
      "img/slider.png",
      "img/slider2.png",
      "img/slider3.jpg",
      "img/slider4.png"
    ],
    Transitions: ["zip"]
  }),
  components: {
    "vue-flux": VueFlux
  }
};
</script>


