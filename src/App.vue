<template>
  <div id="nav">
    <Navbar />
  </div>

  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    name: 'App',
    components: {
      Navbar
    }
  
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin-bottom: 100px;
}

</style>
