<template>
  <div class="container">
    <h1>{{ config.title }}</h1>
    <div class="data-container">
      <JobList :list-path="listPath" :key="index" v-for="(listPath, index) in config.listViews" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JobList from '@/components/JobList';

export default {
  name: 'Index',
  data() {
    return {
    };
  },
  props: {

  },
  components: {
    JobList,
  },
  computed: {
    config() {
      return this.$store.state.config.config;
    },
  },
}
</script>

<style>
@import "../node_modules/font-awesome/css/font-awesome.css";


.data-container {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  text-align: center;
  color: white;
  font-size: 6vw;
  margin: 0 0 1vh 0;
  padding: 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
