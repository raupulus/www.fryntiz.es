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

    <!-- Tecnologías -->
    <Technologies />

    <!-- Mis Aptitudes -->
    <Cards />

    <!-- Presentación -->
    <MyHistory />

    <!-- Section 5 -->
    <section class="py-20 bg-gray-50">
      <div
        class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16"
      >
        <div class="flex flex-wrap items-center -mx-3">
          <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div class="w-full lg:max-w-md">
              <h2
                class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"
              >
                Presentación
              </h2>
              <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                Lista de puntos fuertes:
              </p>
              <ul>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">Punto fuerte 1</span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">Punto fuerte 2</span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">Punto fuerte 3</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              class="mx-auto sm:max-w-sm lg:max-w-full"
              src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
              alt="feature image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6 -->
    <section class="py-20 bg-white">
      <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center">
          Habilidades
        </h2>
        <p class="mt-2 text-lg text-center text-gray-600">
          Lista de habilidades.
        </p>
        <div
          class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
        >
          <div
            class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path
                  d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
                ></path>
                <circle cx="6" cy="14" r="3"></circle>
                <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Certifications</h4>
            <p class="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 8a3 3 0 0 1 0 6"></path>
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                <path
                  d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Notifications</h4>
            <p class="text-base text-center text-gray-500">
              Send out notifications to all your customers to keep them engaged.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline
                  points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"
                ></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
                <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Bundles</h4>
            <p class="text-base text-center text-gray-500">
              High-quality bundles of awesome tools to help you out.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l3 3l-3 3"></path>
                <line x1="13" y1="15" x2="16" y2="15"></line>
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Developer Tools</h4>
            <p class="text-base text-center text-gray-500">
              Developer tools to help grow your application and keep it
              up-to-date.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="9.5" y1="11" x2="9.51" y2="11"></line>
                <line x1="14.5" y1="11" x2="14.51" y2="11"></line>
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                <path
                  d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Building Blocks</h4>
            <p class="text-base text-center text-gray-500">
              The right kind of building blocks to take your company to the next
              level.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
          >
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="15" y1="5" x2="15" y2="7"></line>
                <line x1="15" y1="11" x2="15" y2="13"></line>
                <line x1="15" y1="17" x2="15" y2="19"></line>
                <path
                  d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
                ></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Coupons</h4>
            <p class="text-base text-center text-gray-500">
              Coupons system to provide special offers and discounts for your
              app.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section
      class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32"
    >
      <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">
          <!-- Top Text -->
          <div class="flex justify-between">
            <h1
              class="relative flex flex-col text-6xl font-extrabold text-left text-black"
            >
              Crafting
              <span>Powerful</span>
              <span>Experiences</span>
            </h1>
          </div>
          <!-- Right Image -->
          <div
            class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96"
          >
            <img
              src="https://cdn.devdojo.com/images/december2020/designs3d.png"
              class="object-cover mt-3 mr-5 h-80 lg:h-96"
            />
          </div>
        </div>

        <!-- Separator -->
        <div class="my-16 border-b border-gray-300 lg:my-24"></div>

        <!-- Bottom Text -->
        <h2 class="text-left text-gray-500 xl:text-xl">
          Building beautiful designs for your next project. We've unlocked the
          secret to converting visitors into customers. Download our re-usable
          and extandable components today.
        </h2>
      </div>
    </section>

    <!-- Section 4 -->
    <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <div
        class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
      >
        <!-- Image -->
        <div
          class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
        >
          <img
            src="https://cdn.devdojo.com/images/december2020/productivity.png"
            class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
          />
        </div>

        <!-- Content -->
        <div
          class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
        >
          <h2
            class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          >
            Boost Productivity
          </h2>
          <p
            class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
          >
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Maximize productivity and growth
            </li>
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Speed past your competition
            </li>
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Learn the top techniques
            </li>
          </ul>
        </div>
        <!-- End  Content -->
      </div>
      <div
        class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
      >
        <!-- Content -->
        <div
          class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32"
        >
          <h2
            class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          >
            Automated Tasks
          </h2>
          <p
            class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg"
          >
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Automated task management workflow
            </li>
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Detailed analytics for your data
            </li>
            <li
              class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
            >
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"
                ><span class="text-sm font-bold">✓</span></span
              >
              Some awesome integrations
            </li>
          </ul>
        </div>
        <!-- End  Content -->

        <!-- Image -->
        <div
          class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
        >
          <img
            src="https://cdn.devdojo.com/images/december2020/settings.png"
            class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
          />
        </div>
      </div>
    </section>

    <!-- Section 7 -->
    <section class="w-full py-12 bg-white lg:py-24">
      <div class="max-w-6xl px-12 mx-auto text-center">
        <div class="space-y-12 md:text-center">
          <div class="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2
              class="relative text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Our Awesome Team
            </h2>
            <p class="text-xl text-gray-500">
              We take pride in the people we work with. This is because we all
              collectively help each other become more awesome every day.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/headshot2.jpg"
              />
              <h2 class="text-lg font-medium">John Doe</h2>
              <p class="font-medium text-blue-500">CEO and Founder</p>
              <p class="text-gray-400">Team member as of 2015</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/headshotguy.jpg"
              />
              <h2 class="text-lg font-medium">Mike Smith</h2>
              <p class="font-medium text-blue-500">CTO and Co-Founder</p>
              <p class="text-gray-400">Team member as of 2015</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/headshot-n.jpg"
              />
              <h2 class="text-lg font-medium">Fred Clemens</h2>
              <p class="font-medium text-blue-500">Marketing Manager</p>
              <p class="text-gray-400">Team member as of 2016</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/female-headshot-2.jpg"
              />
              <h2 class="text-lg font-medium">Sandra Mitchell</h2>
              <p class="font-medium text-blue-500">Lead Designer</p>
              <p class="text-gray-400">Team member as of 2017</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/headshot-female.jpg"
              />
              <h2 class="text-lg font-medium">Kelly Rogers</h2>
              <p class="font-medium text-blue-500">Designer</p>
              <p class="text-gray-400">Team member as of 2018</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full border border-gray-200 rounded-lg shadow-sm">
            <div class="flex flex-col items-center justify-center p-10">
              <img
                class="w-32 h-32 mb-6 rounded-full"
                src="https://cdn.devdojo.com/images/june2021/headshotf2.jpg"
              />
              <h2 class="text-lg font-medium">Sarah Neilson</h2>
              <p class="font-medium text-blue-500">Designer</p>
              <p class="text-gray-400">Team member as of 2018</p>
            </div>

            <div class="flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
              </a>
              <a
                href="#_"
                class="flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8 -->
    <section class="bg-white">
      <div
        class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
      >
        <div class="flex flex-col items-center sm:px-5 md:flex-row">
          <div class="w-full md:w-1/2">
            <a href="#_" class="block">
              <img
                class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                src="https://cdn.devdojo.com/images/may2021/cupcakes.jpg"
              />
            </a>
          </div>
          <div
            class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2"
          >
            <div
              class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5"
            >
              <div
                class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
              >
                <svg
                  class="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <span>Featured</span>
              </div>
              <h1
                class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"
              >
                <a href="#_">Savory Templates. Sweet Designs.</a>
              </h1>
              <p class="pt-2 text-sm font-medium">
                by <a href="#_" class="mr-1 underline">John Doe</a> ·
                <span class="mx-1">April 23rd, 2021</span> ·
                <span class="mx-1 text-gray-600">5 min. read</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/fruit.jpg"
              />
            </a>
            <div
              class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Lifestyle</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              <a href="#_">Creating a Future Worth Living</a>
            </h2>
            <p class="text-sm text-gray-500">
              Learn the attributes you need to gain in order to build a future
              and create a life that you are truly happy with.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Mary Jane</a> ·
              <span class="mx-1">April 17, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/workout.jpg"
              />
            </a>
            <div
              class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Health</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              The Healther Version of Yourself
            </h2>
            <p class="text-sm text-gray-500">
              If you want to excel in life and become a better version of
              yourself, you'll need to upgrade your life.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Fred Jones</a> ·
              <span class="mx-1">April 10, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.devdojo.com/images/may2021/food.jpg"
              />
            </a>
            <div
              class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Food</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Enjoy the Meals of the Kings
            </h2>
            <p class="text-sm text-gray-500">
              Take the time to enjoy the life that you've created. It's totally
              fine to live like kings and eat like royalty.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Mike Roberts</a> ·
              <span class="mx-1">April 6, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.devdojo.com/images/may2021/books.jpg"
              />
            </a>
            <div
              class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Motivation</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Writing for Success
            </h2>
            <p class="text-sm text-gray-500">
              Writing about your plans for success is extremely helpful for
              yourself and it will allow you to share your story.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Tom Johnson</a> ·
              <span class="mx-1">May 25, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.devdojo.com/images/may2021/clock.jpg"
              />
            </a>
            <div
              class="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Business</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Simple Time Management
            </h2>
            <p class="text-sm text-gray-500">
              Managing your time can make the difference between getting ahead
              in life or staying exactly where you are.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Scott Reedman</a> ·
              <span class="mx-1">May 18, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div
            class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          >
            <a href="#_" class="block">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.devdojo.com/images/may2021/lemons.jpg"
              />
            </a>
            <div
              class="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block"
            >
              <span>Nutrition</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              The Fruits Life
            </h2>
            <p class="text-sm text-gray-500">
              Take a moment and enjoy to enjoy the many fruits of life.
              Relaxation and a healthy diet can go a long way.
            </p>
            <p class="pt-2 text-xs font-medium">
              <a href="#_" class="mr-1 underline">Jake Caldwell</a> ·
              <span class="mx-1">May 15, 2021</span> ·
              <span class="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 10 -->
    <section
      class="flex items-center justify-center py-20 bg-white min-w-screen"
    >
      <div class="px-16 bg-white">
        <div
          class="container flex flex-col items-start mx-auto lg:items-center"
        >
          <p
            class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center"
          >
            Don't just take our word for it
          </p>

          <h2
            class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
              ></path>
            </svg>
            See what others are saying
          </h2>
          <div
            class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"
          ></div>

          <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
            <div
              class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0"
            >
              <div class="flex items-center justify-center">
                <div
                  class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">John Doe</h4>
                  <p class="text-gray-600">CEO of Something</p>
                </div>
              </div>
              <blockquote class="mt-8 text-lg text-gray-500">
                "This is a no-brainer if you want to take your business to the
                next level. If you are looking for the ultimate toolset, this is
                it!"
              </blockquote>
            </div>
            <div
              class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200"
            >
              <div class="flex items-center justify-center">
                <div
                  class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">Jane Doe</h4>
                  <p class="text-gray-600">CTO of Business</p>
                </div>
              </div>
              <blockquote class="mt-8 text-lg text-gray-500">
                "Thanks for creating this service. My life is so much easier.
                Thanks for making such a great product."
              </blockquote>
            </div>
            <div
              class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3"
            >
              <div class="flex items-center justify-center">
                <div
                  class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h4 class="font-bold text-gray-800">John Smith</h4>
                  <p class="text-gray-600">Creator of Stuff</p>
                </div>
              </div>
              <blockquote class="mt-8 text-lg text-gray-500">
                "Packed with awesome content and exactly what I was looking for.
                I would highly recommend this to anyone."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Slide from "@/components/Slide.vue";
import Cards from "@/components/Cards.vue";
import MyHistory from "@/components/MyHistory.vue";
import Technologies from "@/components/Technologies.vue";

export default defineComponent({
  name: "Home",
  components: {
    Slide,
    Cards,
    MyHistory,
    Technologies,
  },
});
</script>
