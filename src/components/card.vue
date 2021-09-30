<template>
  <div class="card">
    <img :src="url_image" alt="product-image" >
    <div class="info">
      <div class="title">{{title}}</div>
    </div>
    <div class="button-open" @click="openWindow">Открыть</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: String,
    url_image: String,
    openWindow: Function
  }
}
</script>

<style>
.card{
  position: relative;
  width: 250px;
  height: 204px;
  border: var(--second-color) solid 1px;
  padding: 6px;
  border-radius: 10px;
  transition: 0.3s;
}
.card:hover {
  border: 1px solid var(--main-color);
}
.card .button-open {
  position: absolute;
  bottom: 6px;
  width: 248px;
  height: 30px;
  background: var(--main-color);
  color: var(--background-color);
  border: 1px solid var(--main-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}
.card .title {
  position: absolute;
  top: 6px;
  opacity: 0;
  transition: 0.2s;
}
.card:hover img {
  opacity: 0;
}
.card:hover .title {
  opacity: 100;
}
.card .button-open:hover {
  background: var(--background-color);
  color: var(--main-color);
  cursor: pointer;
  border: 1px solid var(--main-color);
}
.card img {
  transition: 0.2s;
  width: 100%;
  max-height: 100%;
  border-radius: 8px;
  margin-bottom: 6px;
}
</style>