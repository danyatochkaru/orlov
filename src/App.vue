<template>
  <header>
    <div class="username" v-if="user.username" @click="openWindow">{{ user.username }}</div>
    <div class="login" v-else>ne lol</div>
    <router-link class="main" to="/">Главная</router-link>
    <router-link class="basket" to="/basket">
      Корзина | {{countItems}} |
    </router-link>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Trash</router-link>
    </div> -->
  </header>
  <Window v-if="showWindow" :data="data" :closeWindow="closeWindow">
    <span @click="toggleTheme" class="btn">Сменить тему</span>
    <span @click="exit" class="btn">Выйти</span>
  </Window>
  <router-view/>
</template>

<script>
import Window from './components/window.vue'
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      user: {},
      data: {},
      showWindow: false,
      countItems: 0
    }
  },
  created() {
    this.getTheme()
  },
  components: {
      Window
  },
  beforeMount() {
    this.getUserInfo()
  },
  methods: {
    openWindow() {
      this.data = { title: this.user.username }
      this.showWindow = true
    },
    closeWindow() {
      this.showWindow = false
    },
    getTheme() {
      if (VueCookies.get("theme")) {
        if (VueCookies.get("theme") != 'light') {
          document.documentElement.style.setProperty('--second-color', '#212121');
          document.documentElement.style.setProperty('--background-color', '#f1f1f1');
        } else {
          document.documentElement.style.setProperty('--second-color', '#f1f1f1');
          document.documentElement.style.setProperty('--background-color', '#212121');
        }
      } else VueCookies.set("theme", "light")
    },
    toggleTheme() {
      if (VueCookies.get("theme")) {
        if (VueCookies.get("theme") == 'light') {
          VueCookies.set("theme", "dark")
          document.documentElement.style.setProperty('--second-color', '#212121');
          document.documentElement.style.setProperty('--background-color', '#f1f1f1');
        } else {
          VueCookies.set("theme", "light")
          document.documentElement.style.setProperty('--second-color', '#f1f1f1');
          document.documentElement.style.setProperty('--background-color', '#212121');
        }
      } else VueCookies.set("theme", "light")
    },
    getUserInfo() {
      this.axios({
        method: 'get',
        withCredentials: true,
        url: 'http://localhost:3030/auth/me'
      }).then(response => {
        this.user = response.data.data
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;400;500;600;700&display=swap');

:root{
  --main-color: #0099cc;
  --second-color: #212121;
  --background-color: #f1f1f1;
}

*{
  font-family: 'Exo 2', sans-serif;
  font-weight: 500;
}
body{
  background: var(--background-color);
  color: var(--second-color);
}

header{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 60px;
  box-shadow: 0px 2px 10px var(--second-color);
  padding: 4px 0;
  border-radius: 0 0 10px 10px;
}
header .username {
  font-size: 18px;
  font-weight: 600;
}
header a {
  text-decoration: none;
  color: var(--second-color);
}
header *:hover{
  cursor: pointer;
  color: var(--main-color);
}
.btn {
  background: var(--main-color);
  color: var(--background-color);
  border: 1px solid var(--main-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}
.btn:hover {
  cursor: pointer;
  color: var(--main-color);
  background: var(--background-color);
}
</style>
