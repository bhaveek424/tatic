import { createStore, action } from "easy-peasy";

export const store = createStore({
  // how store works? : you put some state on it and then you put some actions on it. We can also put computer properties
  // so i want to keep track of :
  activeSongs: [],
  activeSong: null,
  // action to change/modify these things:
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
});

// In order for everything to access this store via the hooks, Context will have to be applied here.
// SO we are gonna wrap our App in a provider which will have access to this
