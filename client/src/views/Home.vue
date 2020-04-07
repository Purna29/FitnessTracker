<template>
  <div class="wrapper">
    <div class="hero">
      <vue-flux :options="fluxOptions" :images="fluxImages" :transitions="Transitions" ref="slider"></vue-flux>
      <div class="overlay"></div>
      <div class="hero-content">
        
        <h1 class="title is-1 text-center text-light" >How Does 24/7 Fitness Help Me?</h1>
        
        <p class=" text-center  is-1 text-light px-4">Let Fitocracy help you conquer this year. Track workouts, build support, challenge yourself and your friends, all with the help of our expert coaches.</p>
      
         <button class="button pointer is-medium is-primary mt-2" @click="$router.push({path:'/signup'})"><strong >Join Today</strong></button>
        
      </div>
    </div>
 <div class="">
   <h2 class="title text-center mt-4 mb-5">How Does 24/7 Fitness Help Me?</h2>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="/img/muscle.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">FITNESS ASSESSMENT</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="/img/diet.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">NUTRITIONAL SUCCESS</p>
                
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
            
              </div>
            </div>
          </div>
        </div>
      </div>
            <div class="row mt-3">
        <div class="col-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="img/gym.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">WORKOUTS</p>
                
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
               
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="img/share.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Sharing with Friends</p>
                 
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  <div class="">
   <h2 class="title text-center mt-5 mb-4">How will it work?</h2>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="m-auto">
                  <figure class="image is-48x48">
                    <img
                      src="img/register.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              
              </div>

              <div class="content">
               Register your account with 24/7 Fitness for free
                
                <br />
  
              </div>
            </div>
          </div>
        </div>
           <div class="col-4">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="m-auto">
                  <figure class="image is-48x48">
                    <img
                      src="img/login.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>

              </div>

              <div class="content">
               Sign in to your 24/7 fitness account for free.
 
                <br />

              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="m-auto">
                  <figure class="image is-48x48">
                    <img
                      src="/img/team.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              
              </div>

              <div class="content">
                  Enjoy your account by sharing your activities with your friends.

                <br />
              
              </div>
            </div>
          </div>
        </div>
      </div>

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


