<template>
  <div class="wrapper">
<section class="hero is-primary">
  <div class="hero-body ">
    <div class="container">
      <h1 class="title is-1">
        Why to Join ?
      </h1>
      <h2 class="subtitle">
        24/7 Fitness
      </h2>
    </div>
  </div>
</section>
 <div class=" pt-4">

    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-content">
              <div class="media d-block text-center">
                <div class="media-left d-inline-block">
                  <figure class="image is-48x48">
                    <img
                      src="/img/supports.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content mt-2">
                  <p class="title is-3 text-center">Support</p>
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
              <div class="media d-block text-center">
                <div class="media-left  d-inline-block">
                  <figure class="image is-48x48">
                    <img
                      src="/img/fit.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-3 text-center mt-2">Tools & Training</p>
                
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
              <div class="media d-block text-center">
                <div class="media-left d-inline-block">
                  <figure class="image is-48x48">
                    <img
                      src="img/easy.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content text-center">
                  <p class="title is-3 mt-2">Convenience</p>
                
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
              <div class="media d-block text-center">
                <div class="media-left d-inline-block">
                  <figure class="image is-48x48">
                    <img
                      src="img/speech-bubble.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-3 text-center mt-2">Community</p>
                 
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


