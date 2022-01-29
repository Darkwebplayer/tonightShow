<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Movie from "../components/Home/Movie.vue";
import Watchlist from "@/components/Watchlist/Watchlist.vue";
import Header from "@/components/Header/Header.vue";
export default {
  components: { Movie, Watchlist, Header },
  setup() {
    const store = useStore();
    store.dispatch("fetchMovie");

    const movie = computed(() => store.getters.getMovie);
    const loading = computed(() => {
      return store.getters.getLoading;
    });
    return {
      movie: movie,
      loading,
    };
  },
};
</script>

<template>
  <div
    class="flex md:flex-row flex-col md:justify-start w-full items-center md:h-screen p-5"
  >
    <Header class="md:w-1/6" />
    <div class="p-5 md:w-3/6">
      <movie :movieData="movie" :loading="loading" />
    </div>
    <div class="md:w-2/6">
      <watchlist class="p-5" />
    </div>
  </div>
</template>
