<template>
  <div class="page page-home">
    <!-- Slide -->
    <section class="slide bg-white my-3">
      <div class="container items-center max-w-6xl mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full">
            <Slide />
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologías -->
    <Technologies />

    <!-- Resumen, historia -->
    <MyHistory />

    <!-- Mis Aptitudes -->
    <Cards />

    <!-- Presentación -->
    <Presentation />

    <!-- Habilidades -->
    <Skills />

    <!-- Enlaces a recursos mios interesantes -->
    <HomeLinks />

    <!-- Enlace a redes sociales -->
    <SocialLinks />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Slide from "@/components/home/Slide.vue";
import Cards from "@/components/home/Cards.vue";
import MyHistory from "@/components/home/MyHistory.vue";
import Technologies from "@/components/home/Technologies.vue";
import Presentation from "@/components/home/Presentation.vue";
import Skills from "@/components/home/Skills.vue";
import HomeLinks from "@/components/home/HomeLinks.vue";
import SocialLinks from "@/components/SocialLinks.vue";

export default defineComponent({
  name: "Home",
  components: {
    Slide,
    Cards,
    MyHistory,
    Technologies,
    Presentation,
    Skills,
    HomeLinks,
    SocialLinks,
  },
});
</script>
