import config from '../.config';

export const state = () => ({
  config,
})

export const getters = {
  config: state => {
    return state.config;
  }
}
