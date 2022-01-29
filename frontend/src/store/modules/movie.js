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
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/movies`,
      { watchedMovies: [1, 2, 3] }
    );

    commit("setMovie", data);
  },
};
const mutations = {
  setMovie: (state, value) => {
    state.movie = value;
    state.loading = false;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
