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

  <Footer
    :links1_title="links1_title"
    :links1="links1"
    :links2_title="links2_title"
    :links2="links2"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Alert from "@/components/Alert.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Alert,
    Footer,
  },

  setup() {
    const links1_title = "Mis Plataformas";
    const links1 = {
      "My API": "https://api.fryntiz.dev",
      Curriculum: "https://curriculum.fryntiz.dev",
      "La Guía Linux": "https://laguialinux.es",
    };

    const links2_title = "Recursos";
    const links2 = {
      Gitlab: "https://gitlab.com/fryntiz/www.fryntiz.es",
    };

    return {
      links1_title,
      links1,
      links2_title,
      links2,
    };
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
