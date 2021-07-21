<template>
  <div id="nav" class="pt-8">
    <Navbar />
  </div>

  <Alert
    open="false"
    title="Título del Alert"
    message="Mensaje de prueba"
    type="danger"
  />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Alert from "@/components/Alert.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Alert,
  },
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
