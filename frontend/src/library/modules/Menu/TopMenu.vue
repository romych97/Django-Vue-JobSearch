<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-5
      rounded
      dark:bg-gray-800
    "
  >
    <div class="container flex mx-auto">
      <div class="w-auto">
        <a href="#" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Flowbite</span
          >
        </a>
      </div>
      <div class="w-full">
        <div class="justify-end flex w-full items-center">
          <div
            class="
              mr-10
              hidden
              justify-between
              items-center
              w-full
              md:flex md:w-auto md:order-1
            "
            id="mobile-menu-2"
          >
            <ul
              class="
                flex flex-col
                mt-4
                md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
              "
            >
              <li>
                <router-link
                  to="/"
                  class="
                    block
                    py-2
                    pr-4
                    pl-3
                    text-white
                    bg-blue-700
                    rounded
                    md:bg-transparent md:text-blue-700 md:p-0
                    dark:text-white
                  "
                  aria-current="page"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-700
                    border-b border-gray-100
                    hover:bg-gray-50
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                >
                  About</router-link
                >
              </li>
              <li>
                <router-link
                  to="/messages"
                  class="
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-700
                    border-b border-gray-100
                    hover:bg-gray-50
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                >
                  Messages</router-link
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-700
                    border-b border-gray-100
                    hover:bg-gray-50
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <!-- <button
        class="flex items-center justify-between px-3 py-2 bg-white w-full border border-gray-500 rounded-lg"
        @click="openProfile = !openProfile"
        @blur="openProfile = false"
      >test</button> -->
          <div class="dropdown relative md:order-2">
            <a
              @click="openProfile = !openProfile"
              @blur="openProfile = false"
              class="dropdown-toggle flex items-center hidden-arrow show"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                class="rounded-full"
                style="height: 25px; width: 25px"
                alt=""
                loading="lazy"
              />
            </a>
            <ul 
              v-show="openProfile"
              class="
                dropdown-menu
                min-w-max
                absolute
                bg-white
                text-base
                z-50
                float-left
                py-2
                list-none
                text-left
                rounded-lg
                shadow-lg
                mt-1
                m-0
                bg-clip-padding
                border-none
                left-auto
                right-0
              "
              aria-labelledby="dropdownMenuButton2"
              data-bs-popper="none"
            >
              <li @mousedown="navigate('/profile')" role="button" class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "> 
                  My Profile
              </li>
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-red-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openProfile: false,
      isOptionsExpanded: false,
      selectedOption: "1x",
      options: ["1x", "2x", "3x", "4x or more"],
    };
  },
  methods: {
    toggleProfileMenu() {
      console.log(
        "🚀 ~ file: TopMenu.vue ~ line 78 ~ toggleProfileMenu ~ toggleProfileMenu",
        "toggleProfileMenu"
      );
    },
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
    navigate(to) {
      console.log("🚀 ~ file: TopMenu.vue ~ line 302 ~ navigate ~ to", to)
      this.$router.push(to)
    }
  },
};
</script>