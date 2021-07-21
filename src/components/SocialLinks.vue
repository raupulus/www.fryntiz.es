<template>
  <section class="flex items-center justify-center text-white bg-white">
    <div class="flex flex-col bg-center bg-cover bg-no-repeat my-20">
      <div
        class="grid place-items-center mx-auto my-3 bg-white rounded-3xl space-y-10"
      >
        <h1 class="text-5xl font-semibold text-blue-500">Redes Sociales</h1>
        <div class="flex items-center justify-center space-x-3">
          <!-- Telegram -->
          <a
            href="https://t.me/FryntizOpenDev"
            target="_blank"
            class="background-gray px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              role="img"
              viewBox="0 0 240 240"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="46"
                  x2="29"
                  y1="11"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2aabee" offset="0" />
                  <stop stop-color="#229ed9" offset="1" />
                </linearGradient>
              </defs>
              <g transform="scale(3.47)">
                <circle cy="34.6" cx="34.6" r="34.6" fill="url(#a)" />
                <path
                  d="M47.8 20.5s3.6-1.4 3.3 2c-.1 1.4-1 6.3-1.7 11.6L47 49.8s-.2 2.3-2 2.7c-1.8.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10-7-.7-.6-1.5-1.8.1-3.2l10.5-10c1.2-1.2 2.4-4-2.6-.6l-14 9.5s-1.6 1-4.6.1l-6.5-2s-2.4-1.5 1.7-3c10-4.7 22.3-9.5 33.2-14z"
                  fill="#fff"
                />
              </g>
            </svg>

            <span>Telegram</span>
          </a>

          <!-- Twitter -->
          <a
            href="https://twitter.com/fryntiz"
            target="_blank"
            class="background-blue px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
            <span>Twitter</span>
          </a>

          <!-- Gitlab -->
          <a
            href="https://gitlab.com/fryntiz"
            target="_blank"
            class="background-yellow px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              viewBox="0 0 256 236"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
                fill="#FCA326"
              />
              <path
                d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
                fill="#FCA326"
              />
              <path
                d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
                fill="#E24329"
              />
            </svg>
            <span>Gitlab</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialLinks",

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