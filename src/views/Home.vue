<template>
  <div class="page page-home">
    <!-- Slide -->
    <section class="slide bg-white">
      <div class="container items-center max-w-6xl mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-full">
            <Slide />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Slide from "@/components/Slide.vue";

export default defineComponent({
  name: "Home",
  components: {
    Slide,
  },
});
</script>
