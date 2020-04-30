<template>
  <div class="wrapper">
    <div class="pt-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-3 mb-3" v-for="item in fitness">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="item.img" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content text-left">
                    <p class>
                      <b>{{item.duration}}</b>
                    </p>
                  </div>
                </div>

                <div class="content">
                  {{item.des}}
                  <social-sharing
                    url="https://thumbs.dreamstime.com/z/aerobics-elliptical-walker-trainer-group-gym-fitness-workout-40979084.jpg"
                    title="TreadMill 45Mins"
                    description="For warm up adn callorie burn"
                    quote="One of the best exercise to burn body fats"
                    hashtags="treadmill,ftiness"
                    twitter-user="vuejs"
                    inline-template
                  >
                    <div class="social">
                      <network network="facebook">
                        <img src="img/facebook.png">
                      </network>

                      <network network="linkedin">
                         <img src="img/linkedin.png">
                      </network>

                      <network network="twitter">
                        <img src="img/twitter.png">
                      </network>
                    </div>
                  </social-sharing>
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
  background: url("/img/welcomes.png") center center no-repeat;
}
.social img {
  width: 21px;
  margin:0px 9px;
  margin-top: 10px;
}
.flux-image,
.vue-flux {
  height: 540px !important;
}
.hero-body {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 97px 0px !important;
}
.overlay {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgba(57, 57, 58, 0.30156862745);
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
.wrapper {
  background: aliceblue;
}
.card {
  cursor: pointer;
  transition: 0.8s;
}
.card:hover {
  transform: scale(1.1);
  position: relative;
  z-index: 1000;
  transition: 0.8s;
  box-shadow: 1px 5px 11px 7px #8ba8bd;
}
</style>
<script>
import Vue from "vue";
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
    fitness: {},
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
  },
  mounted() {
    var self = this;
    Vue.axios
      .get("/exercise/all")
      .then(response => {
        self.fitness = response.data;
      })
      .catch(err => {
        self.errors = err.response.data.message;
      });
  }
};
</script>


