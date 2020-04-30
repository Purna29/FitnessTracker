<template>
  <div class="wrapper">
    <h1 class="h3 text-dark mb-0 text-center pt-4">Diet</h1>
    <h1 class="h3 text-dark mb-1 text-center pt-4">Food Items</h1>
    <div class="pt-4">
      <div class="container">
        <div class="row">
        <div class="col-12">
          <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Serving</th>
      <th scope="col">CRL</th>
      <th scope="col">Protein</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in item">
      <td>{{item.name}}</td>
      <td>{{item.serving}}</td>
      <td>{{item.cal}}</td>
      <td>{{item.protein}}</td>
    </tr>

  </tbody>
</table>
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
  height: 48%;
  border-radius: 138px;
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
import Vue from 'vue'
export default {
  
  data: () => ({
      item:""
  }),
  mounted() {
    var self = this
          Vue.axios.get("/food/all")
      .then((response) => {
        self.item = response.data
})
  }
};
</script>


