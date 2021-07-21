<template>
  <section class="px-2 py-20 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-5 space-y-5 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline"> Conoce </span>

              <span class="block color-blue xl:inline"> ¡Mi Trayectoria! </span>
            </h1>

            <p
              class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
            >
              <span class="block mt-1">
                Intento centrarme en backend aunque me gusta muchísimo
                javascript y vue.js
              </span>

              <br />

              <span class="block mt-1">
                Me apasiona la electrónica (raspberry, arduino, esp32, esp8266,
                attiny, stm32)
              </span>

              <br />

              <span class="block mt-1">
                Llevo programando como hobbie muchos años pero profesionalmente
                desde {{ startDeveloping() }}
              </span>
            </p>

            <div class="relative flex flex-col sm:flex-row sm:space-x-3">
              <a
                href="https://curriculum.fryntiz.es"
                target="_blank"
                class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white background-blue rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
              >
                Curriculum Vitae
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <router-link
                to="/contact"
                class="flex items-center px-6 py-3 text-white background-gray rounded-md hover:bg-gray-200 hover:text-gray-600"
              >
                Contactar
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
          >
            <img src="@/assets/images/home/my-history.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyHistory",

  setup() {
    const startDeveloping = () => {
      const from = new Date(2018, 11, 16);
      const now = new Date();

      // Diferencia de tiempo en segundos.
      let diff = Math.abs(now.getTime() - from.getTime()) / 1000;

      // Años
      let years = diff > 31536000 ? Math.floor(diff / 31536000) : 0;
      diff -= years * 31536000;

      // Meses
      let months = diff > 2629800 ? Math.floor(diff / 2629800) : 0;
      diff -= months * 2629800;

      return years + " años, " + months + " meses";
    };

    return {
      startDeveloping,
    };
  },
  /*
    methods: {
      
    },
    */
});
</script>

<style scoped lang="scss">
.color-blue {
  color: $blue;
}
.background-blue {
  background-color: $blue;
}

.background-gray {
  background-color: $gray;
}
</style>