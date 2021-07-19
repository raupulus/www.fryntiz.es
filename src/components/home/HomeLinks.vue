<template>
  <!-- Bg orange -->
  <section
    class="max-w-screen-lg background-gray shadow-2xl rounded-lg mx-auto text-center py-12 mt-4"
  >
    <h2
      class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10"
    >
      Curriculum
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md bg-white shadow">
        <a href="#" class="text-gray-700 font-bold py-2 px-6"> Visitar </a>
      </div>
    </div>
  </section>

  <!-- Bg indigo -->
  <section
    class="max-w-screen-lg background-blue shadow-2xl rounded-lg mx-auto text-center py-12 mt-4"
  >
    <h2
      class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10"
    >
      Api
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md bg-white shadow">
        <a href="#" class="text-gray-700 font-bold py-2 px-6"> Visitar </a>
      </div>
    </div>
  </section>

  <!-- Bg white -->
  <section
    class="max-w-screen-lg background-yellow shadow-2xl rounded-lg mx-auto text-center py-12 mt-4"
  >
    <h2
      class="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10"
    >
      Contacto
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md bg-blue-500 shadow">
        <a href="#" class="text-gray-200 font-bold py-2 px-6"> Visitar </a>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeLinks",

  setup() {
    /*
        function onSwiper(swiper) {
            console.log(swiper);
        }

        function onSlideChange() {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange
        }
        */
  },
  /*
    methods: {
      
    },
    */
});
</script>

<style scoped lang="scss">
.background-blue {
  background-color: $blue;
}

.background-gray {
  background-color: $gray;
}

.background-yellow {
  background-color: $yellow;
}
</style>