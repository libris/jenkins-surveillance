<template>
  <div class="Job" :class="{ 'failure': failure, 'success': success, 'progress': inProgress, 'inactive': inactive }">
    <div class="Job-name">
      {{ name }}
    </div>
    <div class="Job-progress">
      <i v-if="inProgress" class="fa fa-refresh fa-spin"></i>
      <i v-if="failure" class="fa fa-times"></i>
      <i v-if="success" class="fa fa-check"></i>
      <i v-if="inactive" class="fa fa-pause"></i>
    </div>
  </div>
</template>
<style>

</style>


<script>

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
    };
  },
  computed: {
    inactive() {
      return this.jobData.color === 'disabled';
    },
    inProgress() {
      return this.jobData.color === 'blue_anime' || this.jobData.color === 'red_anime';
    },
    success() {
      return this.jobData.color === 'blue';
    },
    failure() {
      return this.jobData.color === 'red';
    },
    name() {
      return this.jobData.name.split('_').join(' ').replace('DEV', '').toUpperCase();
    },
  },
  methods: {
  },
  components: {
  },
  mounted() { 
  },
};
</script>

<style lang="less">

.Job {
  flex-grow: 0;
  padding: 1vh 2vw;
  font-size: 3.7vh;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
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
  &.progress {
    background-color: #ffbc00;
    border-color: darken(#ffbc00, 10%);
  }
  &.inactive {
    background-color: #d1d1d1;
    border-color: darken(#d1d1d1, 10%);
  }
  &-name {
  }
}

</style>