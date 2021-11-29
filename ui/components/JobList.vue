<template>
  <div class="JobList" v-if="fetchedData">
    <Job v-for="(job, index) in fetchedData.jobs" :job-data="job" :key="index" />
  </div>
</template>
<style>

</style>


<script>
import Job from '@/components/Job';

export default {
  name: 'JobList',
  props: {
    listPath: {
      type: String,
      default: '',
    },
  },
  components: {
    Job,
  },
  data() {
    return {
      fetchedData: null,
    };
  },
  computed: {

  },
  methods: {
    fetchData() {
      const fetchUrl = `${this.listPath}/api/json`;;
      fetch(fetchUrl).then((response) => {
        return response.json();
      }, (error) => {
      }).then((result) => {
        this.fetchedData = result;
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.fetchData();
    }, 2000);
  },
};
</script>


<style lang="scss">

.JobList {
  width: 100vw;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>