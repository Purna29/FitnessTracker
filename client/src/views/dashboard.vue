<template>
  <div class="wrapper">
    <div class="pt-4">
      <div class="container">
        <div class="row justify-content-center">
         <div class="col-6">
           <div class="field">
  <label class="label">Name</label>
  <!--
  <div class="control">
    <div class="notification is-primary is-light text-center" v-if="err">
        <b>{{err}}</b>
      </div>
    <select v-model="excercise" id="excercise" class="w-100 rounder py-2" >
       <option disabled value="">Please select excercise</option>
      <option v-for="type in types">{{type.type}}</option>
    </select>
  </div>-->
  <b-autocomplete
    v-model="exerciseTypeInput"
    :data="filteredTypes"
    @select="typeSelected"

  />


</div>

<div class="field">
  <label class="label">Reps</label>
  <div class="control ">
    <input class="input " v-model="rep" type="text" placeholder="Enter reps" >
 
  </div>
 
</div>

<div class="field">
  <label class="label">Calories</label>
  <div class="control ">
    <input class="input " v-model="cal" type="text" placeholder="Enter calories" >
 
  </div>
 
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="calculate">Calcualte</button>
  </div>

</div>
         </div>
         <div class="col-6">
           <table class="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Reps</th>
      <th scope="col">Calories</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="result in results">
      
      <td>{{result.exercise}}</td>
     
      <td>{{result.reps}}</td>
      <td>{{result.cal}}</td>
       <td>{{result.result}}</td>
    </tr>
  </tbody>
</table>
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
  transform: scale(1.017);
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
  computed:{
    filteredTypes(){
      if(this.types !== null){
        
      return this.types.map(type=> type.type).filter(type=>{
        return type.toLowerCase().indexOf(this.exerciseTypeInput.toLowerCase()) >= 0
      })}
      else return []
    }
  },
  data: () => ({
    exerciseTypeInput: '',
    results:'',
    excercise:"",
    calcualted:'',
    err:'',
    rep:'',
    cal:'',
    types:null,
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
      .get("/exerciseLogs/types")
      .then(response => {
        self.types = response.data;
      })
      .catch(err => {
        self.errors = err.response.data.message;
      });
        Vue.axios
      .get("/exerciseLogs/all")
      .then(response => {
        self.results = response.data.reverse();
      })
      .catch(err => {
        self.errors = err.response.data.message;
      });
  },

  methods: {
      typeSelected(selection){
        this.excercise = selection
      },
     calculate() {
       if(this.cal && this.excercise && this.rep) {

       
       this.calcualted = this.cal*this.rep
      var data = {
        exercise: this.excercise,
        reps: this.rep,
        cal: this.cal,
        result:this.calcualted
      };
      var self = this;
      Vue.axios
        .post("/exerciseLogs/calculate", data)
        .then(response => {
         self.results = response.data.reverse()
         
         
        })
        .catch(err => {
          self.errors = err.response.data.message;
        });
       }
       else {
         this.err = "Please fill the data"
       }
    }
  }
};
$('#excercise').select2();
</script>


