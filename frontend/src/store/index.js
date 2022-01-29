import movie from "./modules/movie";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    movie,
  },
});
export default store;
