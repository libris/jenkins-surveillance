<template>
  <div class="JenkinsData">
    <Job v-for="(job, index) in tableData.jobs" :job-data="job" :key="index" />
  </div>
</template>
<style>

</style>


<script>
import Job from '@/components/Job';

export default {
  name: 'JenkinsData',
  props: {
    tableData: {
      type: Object,
      default: null,
    }
  },
  components: {
    Job,
  },
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {
  },
  mounted() { 
  },
};
</script>


<style lang="less">

.JenkinsData {
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>