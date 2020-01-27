<template>
  <div class="Job" :class="{ 'error': jobData.color == 'red', 'success': jobData.color == 'blue', 'progress': jobData.color == 'blue_anime' }">
    <div class="Job-name">
      {{ name }}
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
  padding: 1vh 1vw;
  font-size: 4vh;
  display: flex;
  flex-grow: 1;
  align-items: center;
  border-width: 0 0 0.5vh 0;
  border-style: solid;
  &.error {
    background-color: #ce8383;
    border-color: darken(#ce8383, 10%);
  }
  &.success {
    background-color: #459a45;
    border-color: darken(#459a45, 10%);
  }
  &.progress {
    background-color: #ffbc00;
    border-color: darken(#ffbc00, 10%);
  }
  &-name {
  }
}

</style>