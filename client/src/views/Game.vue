<template>
  <div class="container">
      <div class="card">
        <div class="card-content">
            <h1 class="title is-1">
                Game Page
            </h1>
        </div>
      </div>

      <div class="card">
      <div class="card-content">
        <ul>
          <li v-for="player in Game.Players" :key="player.Name">
            {{player.Name}} {{player.Score}}
          </li>
        </ul>
      </div>

      <img :src="Game.CurrentPicture"  class="card-image"/>
    </div>

  </div>
</template>

<script>
import * as Game from "../models/Game";


export default {
  name: 'Home',
  created(){
    Init();
  },
  data:()=>({
    Game
  })
}
</script>

<style >
  img.card-image {
    width: 100%
  }
</style>