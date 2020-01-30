<template>
  <div class="Job" :class="status">
    <div class="Job-name">
      {{ name }}
    </div>
    <div class="Job-progress">
      <i v-if="status == 'building'" class="fa fa-2x fa-fw fa-refresh fa-spin"></i>
      <i v-if="status == 'failure'" class="fa fa-2x fa-fw fa-times"></i>
      <i v-if="status == 'success'" class="fa fa-2x fa-fw fa-check"></i>
      <i v-if="status == 'inactive'" class="fa fa-2x fa-fw fa-pause-circle"></i>
    </div>
    <div class="Job-statusDetail">
      <span v-if="status != 'building'">{{ timeSinceBuild }}</span>
      <span v-if="status == 'building'">Building...</span>
    </div>
  </div>
</template>
<style>

</style>


<script>
import moment from 'moment';

export default {
  name: 'Job',
  props: {
    jobData: {
      type: Object,
      default: null,
    }
  },
  components: {
  },
  data() {
    return {
      details: null,
      timeSinceBuild: '-',
    };
  },
  watch: {
    status(value, oldValue) {
      if (value !== oldValue && oldValue === 'building') {
        this.updateDetails();
      }
    }
  },
  computed: {
    status() {
      switch(this.jobData.color) {
        case 'blue_anime':
          return 'building';
        case 'red_anime':
          return 'building';
        case 'blue':
          return 'success';
        case 'red':
          return 'failure';
      }
      return 'inactive';
    },
    name() {
      return this.jobData.name.split('_').join(' ').replace('DEV', '').toUpperCase();
    },
  },
  methods: {
    updateDetails() {
      const fetchUrl = `/job/Libris/job/${this.jobData.name}/lastBuild/api/json?tree=result,timestamp,estimatedDuration`;
      fetch(fetchUrl).then((response) => {
        return response.json();
      }, (error) => {
      }).then((result) => {
        this.details = result;
      });
    },
    updateTime() {
      if (this.details) {
        this.timeSinceBuild = moment(this.details.timestamp).fromNow();
      } else {
        this.timeSinceBuild = '-';
      }
    }
  },
  components: {
  },
  mounted() {
    this.updateDetails();
    setInterval(this.updateTime, 5000);
  },
};
</script>

<style lang="less">

.Job {
  width: 24vw;
  height: 26vw;
  display: flex;
  margin-bottom: 1vw;
  margin-right: 1vw;
  flex-direction: column;
  padding: 0 0 0.25rem 0;
  flex-grow: 0;
  font-size: 3.5vw;
  align-items: center;
  border-width: 0 0 0.5vh 0;
  border-style: solid;
  &.failure {
    background-color: #c07070;
    border-color: darken(#c07070, 10%);
  }
  &.success {
    background-color: #459a45;
    border-color: darken(#459a45, 10%);
  }
  &.building {
    background-color: #ffbc00;
    border-color: darken(#ffbc00, 10%);
  }
  &.inactive {
    background-color: #d1d1d1;
    border-color: darken(#d1d1d1, 10%);
  }
  &-name {
    padding: 0.5em 0.5em 0em 0.5em;
    text-align: center;
    overflow: hidden;
    flex-basis: 75%;
  }
  &-progress {
    flex-basis: 10%;
    // background-color: pink;
    width: 100%;
  }
  &-statusDetail {
    flex-basis: 5%;
    font-size: 70%;
  }
}

</style>