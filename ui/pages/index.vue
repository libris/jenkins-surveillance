<template>
  <div class="container">
    <JenkinsData v-if="fetchedData" :table-data="fetchedData" />
  </div>
</template>

<script>
import axios from 'axios'
import JenkinsData from '@/components/JenkinsData';

export default {
  name: 'Index',
  data() {
    return {
      fetchedData: null,
      fetchNo: 0,
    };
  },
  components: {
    JenkinsData,
  },
  computed: {
  },
  methods: {
    fetchData() {
      const fetchUrl = '/api/';
      fetch(fetchUrl).then((response) => {
        return response.json();
      }, (error) => {
      }).then((result) => {
        this.fetchedData = result;
      });
    },
  },
  async asyncData({params}) {
    let response = await axios.get(`/api/`, { crossdomain: true });
    return {result: response.data };
  },
  mounted() {
    setInterval(() => {
      this.fetchData();
      console.log("fetch");
    }, 2000);
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
