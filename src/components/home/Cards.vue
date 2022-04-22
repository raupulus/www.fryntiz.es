<template>
  <section class="py-10 px-5 mt-8">
    <div class="container px-8 mx-auto sm:px-12 lg:px-20">
      <!--
        <h1
          class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"
        >
          <a href="#_">Aptitudes</a>
        </h1>
        <p class="text-lg font-medium text-gray-500 sm:text-2xl">
          Lista de aptitudes aquí...
        </p>
        -->
      <div class="flex grid h-full w-full grid-cols-12 gap-4 sm:gap-10 pb-10">
        <div
          class="
            h-full
            col-span-12
            overflow-hidden
            rounded-xl
            md:col-span-6
            xl:col-span-4
          "
        >
          <a
            href="#_"
            class="
              image-curious
              block
              w-full
              transition
              duration-300
              ease-in-out
              transform
              bg-center bg-cover
              h-96
              hover:scale-110
            "
          >
          </a>

          <div
            class="
              z-index-0
              relative
              z-20
              w-full
              h-auto
              py-8
              text-white
              background-gray
              border-t-0 border-yellow-200
              px-7
            "
          >
            <a
              href="#_"
              class="
                inline-block
                text-xs
                font-semibold
                absolute
                top-0
                -mt-3.5
                rounded-full
                px-4
                py-2
                uppercase
                text-purple-500
                bg-white
              "
              >Autodidacta</a
            >

            <h2 class="mb-5 text-5xl font-bold">
              <a href="#_">Estudiar Practicar</a>
            </h2>

            <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">
              Formación constante
              <br />
              Poder ser autodidacta es maravilloso
            </p>
          </div>
        </div>

        <div
          class="
            h-full
            col-span-12
            overflow-hidden
            rounded-xl
            md:col-span-6
            xl:col-span-4
          "
        >
          <a
            href="#_"
            class="
              image-backend
              block
              w-full
              transition
              duration-300
              ease-in-out
              transform
              bg-center bg-cover
              h-96
              hover:scale-110
            "
          >
          </a>
          <div
            class="
              z-index-0
              relative
              z-20
              w-full
              h-auto
              py-8
              text-white
              background-blue
              border-t-0 border-yellow-200
              px-7
            "
          >
            <a
              href="#_"
              class="
                inline-block
                text-xs
                font-semibold
                absolute
                top-0
                -mt-3.5
                rounded-full
                px-4
                py-2
                uppercase
                text-blue-500
                bg-white
              "
              >Backend</a
            >
            <h2 class="mb-5 text-5xl font-bold">
              <a href="#_">Lógica API REST</a>
            </h2>
            <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">
              Especilizándome en apis
              <br />
              Destreza creando lógica y estructuras
            </p>
          </div>
        </div>

        <div
          class="
            h-full
            col-span-12
            overflow-hidden
            rounded-xl
            sm:col-span-12
            xl:col-span-4
          "
        >
          <a
            href="#_"
            class="
              image-open-source
              block
              w-full
              transition
              duration-300
              ease-in-out
              transform
              bg-center bg-cover
              h-96
              hover:scale-110
            "
          ></a>
          <div
            class="
              z-index-0
              relative
              z-20
              items-start
              justify-center
              w-full
              h-auto
              py-8
              text-white
              bg-yellow-400
              border-t-0 border-yellow-200
              sm:h-full
              xl:h-auto
              px-7
            "
          >
            <a
              href="#_"
              class="
                inline-block
                text-xs
                font-semibold
                absolute
                sm:mb-5
                xl:mb-0
                sm:relative
                xl:absolute
                top-0
                -mt-3.5
                rounded-full
                px-4
                py-2
                uppercase
                text-yellow-400
                bg-white
              "
              >Open Source</a
            >
            <h2 class="mb-5 text-5xl font-bold">
              <a href="#_">Libertad en lo Digital</a>
            </h2>
            <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">
              Desarrollo publicando mis proyectos OSS
              <br />
              Desde 2001 con software libre
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",

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
.image-curious {
  background-image: url("../../assets/images/home/cards/curioso.jpg");
}

.image-backend {
  background-image: url("../../assets/images/home/cards/backend-developer.jpg");
}

.image-open-source {
  background-image: url("../../assets/images/home/cards/open-source.jpg");
}

.background-gray {
  background-color: $gray;
}

.background-blue {
  background-color: $blue;
}

.background-orange {
  background-color: $orange;
}

.z-index-0 {
  z-index: 0;
}
</style>