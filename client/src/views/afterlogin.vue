<template>
  <div class="wrapper">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Welcome to 24/7 Fitness!</h1>
        </div>
      </div>
    </section>
    <div class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="/img/consultancy.jpg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content text-center">
                    <p class="title is-4">FITNESS CONSULTATION</p>
                  </div>
                </div>

                <div class="content">
                  Through a short survey, conversation and a movement assessment, 
                  our team will prescribe the perfect program to get you started and
                   on track to meet your fitness goals.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/team-workout.jpg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content text-center">
                    <p class="title is-4">TEAM WORKOUT</p>
                  </div>
                </div>

                <div class="content">
                  Full-body workouts designed to build strength and endurance,
                   using the energy of the group and the expertise of the certified 
                   personal trainer to maximize your results.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/personal-training.jpeg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content text-center">
                    <p class="title is-4">PERSONAL TRAINING</p>
                  </div>
                </div>

                <div class="content">
                  One-on-one personalized workouts with a certified personal trainer designed to make you stronger from the inside out.
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
  </div>
</template>
<style scoped>
.hero {
  background: url("/img/welcomes.png") center center no-repeat;
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


