<template>
  <div id="app">
    <button id="1" class="btn" @click="ddd(5)">5</button>
    <button id="2" class="btn" @click="ddd(6)">6</button>
    <button id="3" class="btn" @click="ddd(7)">7</button>
    <button id="4" class="btn" @click="ddd(8)">8</button>
    <button id="5" class="btn" @click="ddd(9)">9</button>
    <button id="6" class="btn" @click="ddd(10)">10</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  methods: {
    ddd(index) {
     console.log("hhhh1");
  },
};
</script>

<style scoped>
.btn {
  width: 50px;
  height: 30px;
  margin: 5px;
  border-radius: 25px/15px;
  border: 5px solid rgb(59, 151, 255);
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 20px rgb(120, 194, 255) inset;
}
.btn:hover {
  width: 50px;
  height: 30px;
  border-radius: 15px/25px;
  border: 5px solid rgb(59, 151, 255);
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 20px rgb(255, 255, 255) inset;
  cursor: pointer;
}
</style>