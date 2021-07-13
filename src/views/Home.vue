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

    <!-- Presentación -->
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
                <span class="block xl:inline"> Resumo </span>

                <span class="block text-indigo-600 xl:inline">
                  ¡Mi Historia!
                </span>
              </h1>

              <p
                class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
              >
                Oriento al backend...
                <br />
                Me apasiona...
                <br />
                Llevo en esto...
              </p>

              <div class="relative flex flex-col sm:flex-row sm:space-x-3">
                <a
                  href="#_"
                  class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  botón aquí?
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

                <a
                  href="#_"
                  class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Leer más?
                </a>
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

    <!-- Tecnologías -->
    <section class="bg-white py-20">
      <div class="container px-8 mx-auto sm:px-12 lg:px-20">
        <!--
        <h1
          class="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7"
        >
          Tecnologías Preferidas
        </h1>
        -->
        <div
          class="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8"
        >
          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/php.svg"
              alt="PHP"
              class="block object-contain h-12"
            />
          </div>
          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/laravel.svg"
              alt="Laravel"
              class="block object-contain h-9"
            />
          </div>
          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/javascript.svg"
              alt="Javascript"
              class="block object-contain h-9"
            />
          </div>
          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/vue.svg"
              alt="Vue"
              class="block object-contain h-7 lg:h-8"
            />
          </div>

          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/tailwindcss.svg"
              alt="Tailwind CSS"
              class="block object-contain h-9"
            />
          </div>

          <div
            class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2"
          >
            <img
              src="@/assets/images/stack/postgresql.svg"
              alt="PostgreSQL"
              class="block object-contain h-9"
            />
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
