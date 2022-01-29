<template>
  <div
    class="flex flex-col items-center md:max-w-3xl mx-auto bg-blueFG p-5 w-full"
    v-if="movieData.title"
  >
    <h3 class="text-center text-white font-bold text-xl">
      {{ movieData.title }}({{ movieData.year }})
    </h3>
    <img :src="movieData.poster" alt="" class="w-72 mx-auto my-5 rounded-md" />
    <div class="mx-auto max-w-2xl text-center">
      <ul class="mx-auto text-white font-bold py-3">
        <li>Rating : {{ movieData.rating }} &#x2B50;</li>
        <li>Director : {{ movieData.director }}</li>
        <li>Cast : {{ movieData.actors }}</li>
        <li>Genre : {{ movieData.genres }}</li>
      </ul>
      <div class="text-white py-3">
        <span class="font-bold">Plot</span>:{{ movieData.plot }}
      </div>
      <div class="">
        <button @click="shareMovie">Share</button>
      </div>
    </div>
  </div>
  <div class="text-center text-white font-bold" v-if="loading">LOADING</div>
</template>
<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["movieData", "loading"],
  components: {},
  setup() {
    const shareMovie = async () => {
      console.log(promoPoster);
      try {
        await navigator.share({
          title: "TonightShow - Movie Name",
          text: "awesome movie moviename",
          url: "tonightshow.infy.plus/123",
          files: promoPoster,
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.log("Share Failed", err);
      }
    };
    const webShareApiSupported = computed(() => {
      return navigator.share;
    });

    return {
      webShareApiSupported,
      shareMovie,
    };
  },
};
</script>
