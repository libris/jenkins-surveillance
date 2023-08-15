import config from '../.surveillance.config.js';

export const state = () => ({
  config,
})

export const getters = {
  config: state => {
    return state.config;
  }
}
