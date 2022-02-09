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
    let movie = computed(() => store.getters.getMovie);
    let loading = computed(() => {
      return store.getters.getLoading;
    });
    const handleNewMovie = () => {
      store.dispatch("fetchMovie");
    };

    return {
      movie: movie,
      loading,
      handleNewMovie,
    };
  },
};
</script>

<template>
  <div
    class="flex md:flex-row flex-col md:justify-start w-full items-center md:h-screen p-5"
  >
    <Header class="md:w-1/6" />
    <div class="md:w-3/6 min-h-screen">
      <movie :movieData="movie" :loading="loading" @another="handleNewMovie" />
    </div>
    <div class="md:w-2/6">
      <watchlist class="p-5" />
    </div>
  </div>
</template>
