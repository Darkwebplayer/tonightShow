import axios from "axios";
const state = {
  movie: {},
  loading: true,
  watchedMovies: [],
};
const getters = {
  getMovie: (state) => state.movie,
  getLoading: (state) => state.loading,
};
const actions = {
  async fetchMovie({ commit }) {
    commit("setStartLoading");
    let API_URL = `${import.meta.env.VITE_BASE_API_URL}/movies`;

    const { data } = await axios.post(API_URL, { watchedMovies: [1, 2, 3] });
    console.log(data);
    commit("setMovie", data);
  },
};
const mutations = {
  setMovie: (state, value) => {
    state.movie = value;
    state.loading = false;
  },
  setStartLoading: (state) => {
    state.loading = true;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
