<template>
  <div class="wrapper">
    <h1 class="h3 text-dark mb-4 text-center pt-2">Profile</h1>
    <div class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-6">
        <div class="field">
  <label class="label">First Name</label>
  <div class="control">
    <input class="input" v-model="firstname" type="text" placeholder="Text input">
  </div>
</div>


       <div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input" v-model="lastname" type="text" placeholder="Text input">
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left ">
    <input class="input " v-model="email" type="email" placeholder="Email input" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
     
    </span>
  </div>
 
</div>
<div class="field">
  <label class="label">Mobile No</label>
  <div class="control ">
    <input class="input " v-model="no" type="tel" placeholder="Enter Phone no" >

  </div>
  
</div>
<div class="field">
  <label class="label">Sex</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Height</label>
  <div class="control">
    <input class="input" type="text" v-model="height" placeholder="Height" >
  
  </div>
 
</div>
<div class="field">
  <label class="label">Wieght</label>
  <div class="control ">
    <input class="input " type="text" v-model="weight" placeholder="Wieght">
  
  
  </div>

</div>
<div class="field">
  <label class="label">Age</label>
  <div class="control">
    <input class="input  " v-model="age" type="text" placeholder="Age" >
   
    <span class="icon is-small is-right">
      
    </span>
  </div>
 
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Save Changes </button>
  </div>
  <div class="control">
    <button class="button is-warning ">Return to Dashboard</button>
  </div>
</div>
          </div>
          <div class="col-6 pt-5">
           <figure class="image m-auto">
  <img class="img-fluid" :src="dp">
</figure>
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
figure {
width: 53%;
        height: 41%;
    border-radius: 157px;
    overflow: hidden;
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
.wrapper {
        background: aliceblue;
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
           firstname:'',
    lastname:'',
    age:'',
    weight:'',
    height:'',
    sex:'',
    dp:'',
    email:'',
    no:"",
    fluxOptions: {
      autoplay: true,

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
        var userData = localStorage.getItem('user')
      var userObj = JSON.parse(userData)
      this.firstname = userObj.firstname
      this.lastname = userObj.lastname
      this.age = userObj.age
      this.weight = userObj.weight
      this.height = userObj.height
      this.sex = userObj.sex
      this.dp = userObj.img
      this.email= userObj.email
       this.no= userObj.no
  }
};
</script>


