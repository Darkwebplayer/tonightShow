<template>
  <div
    class="p-5 m-3 md:bg-blueFG rounded-md text-white md:w-1/5 flex justify-center w-full"
  >
    <div class="flex justify-between w-full md:w-min items-center md:block">
      <div class="">
        <img
          src="/img/logo.png"
          alt="tonightsShow logo"
          class="w-16 md:w-24 max-w-lg -rotate-12 mb-3"
        />
      </div>
      <div class="md:my-10 h-full">
        <nav class="h-full">
          <ul class="flex flex-col justify-evenly h-full md:block hidden">
            <li class="py-3 tracking-widest">HOME</li>
            <li class="py-3 tracking-widest">WATCHLIST</li>
            <li class="py-3 tracking-widest">USER</li>
            <li class="py-3 tracking-widest">ABOUT</li>
          </ul>
          <div class="md:hidden">
            <MenuIcon class="w-10" />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { MenuIcon } from "@heroicons/vue/solid";
export default {
  components: { MenuIcon },
  setup() {},
};
</script>
