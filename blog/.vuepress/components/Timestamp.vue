<template>
  <div>
    <h3>{{ timestamp }}</h3>
  </div>
</template>

<script>
export default {
  name: "Timestamp",
  data() {
    return {
      timestamp: Date.now(),
      timer: 0,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.timestamp = Date.now();
    }, 50);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>