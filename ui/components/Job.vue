<template>
  <div class="Job" :class="status">
    <div class="Job-name">
      {{ name }}
    </div>
    <div class="Job-detailsBar">
      <!-- <div class="Job-progress">
        <i :class="{ 'active': status == 'running' }" class="fa fa-2x fa-fw fa-refresh fa-spin"></i>
        <i :class="{ 'active': status == 'failure' }" class="fa fa-2x fa-fw fa-times"></i>
        <i :class="{ 'active': status == 'success' }" class="fa fa-2x fa-fw fa-check"></i>
        <i :class="{ 'active': status == 'inactive' }" class="fa fa-2x fa-fw fa-pause-circle"></i>
      </div> -->
      <div class="Job-statusDetail">
        <span v-if="status !== 'running'">{{ timeSinceBuild }}</span>
        <span v-if="status == 'running'">running</span>
      </div>
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
      if (value !== oldValue && oldValue === 'running') {
        this.updateDetails();
      }
    }
  },
  computed: {
    status() {
      switch(this.jobData.color) {
        case 'blue_anime':
          return 'running';
        case 'red_anime':
          return 'running';
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
        this.updateTime();
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
  position: relative;
  width: 32.5vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  // flex-grow: 0;
  margin-bottom: 0.8vw;
  margin-right: 0.8vw;
  padding: 0 0 0.1vw 0;
  font-size: 3.5vw;
  align-items: center;
  justify-content: space-around;
  border-width: 0 0 0.75vw 0;
  border-style: solid;
  &.failure {
    background-color: #c07070;
    border-color: darken(#c07070, 10%);
    animation: alert 2s linear infinite;
  }
  &.success {    
    background-color: #459a45;
    border-color: darken(#459a45, 10%);
  }
  &.running {
    background-color: #ffbb00e7;
    border-color: darken(#ffbc00, 10%);
    &::after {
      content: "";
      background-image: url('~assets/stripetexture.png');
      background-size: 600% 600%;
      animation: stripes 2s linear infinite;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;   
    }
  }
  &.inactive {
    background-color: #d1d1d1;
    border-color: darken(#d1d1d1, 10%);
  }
  &-name {
    font-size: 4.8vw;
    padding: 0.5vw;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }
  &-detailsBar {
    position: absolute;
    bottom: 0;
    flex-basis: 10%;
    flex-direction: row;
  }
  &-progress {
    i {
      transition: opacity 0.5s ease;
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
  &-statusDetail {
    font-weight: bold;
    font-size: 70%;
  }
}

@keyframes alert {
  0% {
    text-shadow: 0px 0px 1.5vw #ff00002a;
    box-shadow: 0 0 3vw 0px #ff000046;
    background-color: #b46262;
  }
  40% {
    text-shadow: 0px 0px 1.5vw #ff0000ab;
    box-shadow: 0 0 3vw 0px #ff0000;
    background-color: #b95252;
  }
  50% {
    text-shadow: 0px 0px 1.5vw #ff00002a;
    box-shadow: 0 0 3vw 0px #ff000046;
    background-color: #b46262;
  }
  100% {
    text-shadow: 0px 0px 1.5vw #ff00002a;
    box-shadow: 0 0 3vw 0px #ff000046;
    background-color: #b46262;
  }
}

@keyframes stripes {
	0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 36% 36%;
	}
}

</style>