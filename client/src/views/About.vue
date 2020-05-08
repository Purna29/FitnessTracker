<template>
  <div class="wrapper">
<section class="hero is-primary">
  <div class="hero-body ">
    <div class="container">
      <h1 class="title is-1">
        About Us
      </h1>
      <h2 class="subtitle">
        24/7 Fitness
      </h2>
    </div>
  </div>
</section>
 <div class=" pt-4">
<div class="">
   <h2 class="title text-center mt-4 mb-5">How Does 24/7 Fitness Help Me?</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
        </div>
      </div>
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
                
                <br />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  <div class="pb-3">
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
  </div>
</template>
<style scoped>
.hero {
 background: url('/img/whyjoin.jpg') center center no-repeat;
}
.flux-image, .vue-flux {
  height: 540px!important;
}
.hero-body {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 97px 0px!important;
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
      autoplay: true
    },
    fluxImages: [
      "https://cdn.pixabay.com/photo/2016/03/09/09/10/man-1245658_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192_960_720.jpg",
      "https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_960_720.jpg"
    ],
    Transitions: ["zip"]
  }),
  components: {
    "vue-flux": VueFlux
  }
};
</script>


