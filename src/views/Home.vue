<template>
  <section class="products">
    <Window v-if="showWindow" :data="selectedProduct" :closeWindow="closeWindow">
      <img :src="selectedProduct.url_image" :alt="selectedProduct.title">
      <p class="des">Эта машина очень быстрая и работает на божьем топливе</p>
      <p class="price">${{selectedProduct.price}}</p>
      <p class="tobasket btn">Добавить в корзину</p>
    </Window>
    <h1 class="section">Товары</h1>
    <ul>
      <li class="item" v-for="item in products" :key="item.id" :data-id="item.id" ><Card :title="item.title" :url_image="item.url_image" :openWindow="openWindow"></Card></li>
    </ul>
  </section>
  <section class="todo">

  </section>
</template>

<style>
ul li{
  list-style-type: none;
}
</style>

<script>
import Card from '../components/card.vue'
import Window from '../components/window.vue'

export default {
  data(){
    return {
      products: [
        { id: 1, title: "BMW", url_image: "https://auto.vercity.ru/img/magazine/old/30090.jpg", price: 10000 },
        { id: 3, title: "BMW", url_image: "https://auto.vercity.ru/img/magazine/old/30090.jpg", price: 10000 },
        { id: 4, title: "BMW", url_image: "https://auto.vercity.ru/img/magazine/old/30090.jpg", price: 10000 },
        { id: 5, title: "BMW", url_image: "https://auto.vercity.ru/img/magazine/old/30090.jpg", price: 10000 },
        { id: 2, title: "Porchee", url_image: "https://auto.vercity.ru/img/magazine/old/30090.jpg", price: 200000 }
      ],
      selectedProduct: {},
      showWindow: false
    }
  },
  name: 'Home',
  components: {
    Card,
    Window
  },
  methods: {
    openWindow(data){
      this.products.forEach(item => {
        if (data.target.parentNode.parentNode.getAttribute('data-id') == item.id) {
          this.selectedProduct = item
        }
      })
      this.showWindow = true
    },
    closeWindow() {
      this.showWindow = false
    }
  }
}
</script>

<style>
.products {
  width: 90%;
  margin: 40px 5%;
}
.products ul {
  display: grid;
  justify-content: start;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  overflow-x: auto;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: 16px;
}
@media (max-width: 1560px) {
  .products ul {
    grid-template-columns: repeat(4, auto);
  }
}
@media (max-width: 1242px) {
  .products ul {
    grid-template-columns: repeat(3, auto);
  }
}
@media (max-width: 920px) {
  .products ul {
    grid-template-columns: repeat(2, auto);
  }
}
.products ul li {
  width: fit-content;
}
.products .tobasket {
  width: 100%;
  height: 32px;
}
</style>
