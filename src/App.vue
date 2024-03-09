<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <v-btn v-on:click="bMultiplicarDIV=!bMultiplicarDIV" style="text-transform:none;">
      Alternar mostrar DIV
    </v-btn>
    <div v-if="bMultiplicarDIV" style="display:flex;flex-direction:column;align-items:center;">
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
       <div class="box"></div>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld
  },
  data() {
    return {
      // tus datos aquí
      bMultiplicarDIV: false,
    };
  },
  methods: {
    // tus métodos aquí
  },
  beforeCreate() {
    // código antes de crear el componente
  },
  created() {
    // código al crear el componente
  },
  beforeMount() {
    // código antes de montar el componente
  },
  mounted() {
    // código al montar el componente
  },
  beforeUpdate() {
    // código antes de actualizar el componente
  },
  updated() {
    // código al actualizar el componente
  },
  beforeUnmount() {
    // código antes de desmontar el componente
  },
  unmounted() {
    // código al desmontar el componente
  }
};
</script>


<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 10px;
  display: inline-block;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
