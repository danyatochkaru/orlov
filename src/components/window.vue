<template>
  <div class="bg">
    <div class="window">
      <div class="header">
        <h2 class="title">{{data.title || "Без названия"}}</h2>
        <span href="#" class="close" @click="closeWindow">X</span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  props: {
    data: Object,
    closeWindow: Function
  }
}
</script>
<style>
.bg{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--second-color);
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.bg .window {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: fit-content;
  min-height: 300px;
  background: var(--background-color);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 20px;
  z-index: 10;
}
.bg .header {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.bg img {
  max-width: 100%;
}
.bg .close {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 21px;
  height: 21px;
  border: 1px solid var(--second-color);
  border-radius: 50%;
  transition: 0.2s;
}
.bg .close:hover {
  cursor: pointer;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  transition: 0.2s;
}
.bg .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.bg .content p {
  margin: 4px 0;
}
</style>