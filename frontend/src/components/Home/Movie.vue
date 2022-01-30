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
        <!-- <li>Director : {{ movieData.director }}</li>
        <li>Cast : {{ movieData.actors }}</li> -->
        <ul class="flex flex-wrap">
          Genre :
          <li class="px-3" v-for="genre in movieData.genres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
      </ul>
      <div class="">
        <button-large btnText="New Movie &#x267B;" @click="$emit('another')" />
      </div>
      <div class="text-white py-3">
        <span class="font-bold">Plot</span>:{{ movieData.plot }}
      </div>
      <div class="">
        <button @click="shareMovie">Share</button>
      </div>
    </div>
  </div>
  <div class="text-center text-white font-bold" v-if="loading">LOADING</div>
  <canvas class="" ref="canvas">
    <img :src="movieData.poster" alt="" class="w-72 mx-auto my-5 rounded-md"
  /></canvas>
</template>
<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import ButtonLarge from "../ButtonLarge.vue";
export default {
  props: ["movieData", "loading"],
  components: { ButtonLarge },
  emits: ["another"],
  setup() {
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    }

    //Usage example:

    const canvas = ref(null);
    let promoFile = ref();
    onMounted(() => {
      function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
      }
      let dataURL = canvas.value.toDataURL("image/png");
      promoFile.value = dataURLtoFile(dataURL, "promo.png");
    });
    const shareMovie = async () => {
      console.log(promoFile.value);
      try {
        await navigator.share({
          title: "TonightShow - Movie Name",
          text: "awesome movie moviename",
          url: "tonightshow.infy.plus/123",
          files: promoFile.value,
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
      canvas,
    };
  },
};
</script>
