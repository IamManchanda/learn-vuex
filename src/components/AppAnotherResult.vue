<template>
  <div>
    <p>Another Counter is: {{ calculationCounter }}</p>
    <p>Number of clicks: {{ stringCounter }} </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['calculationCounter', 'stringCounter'])
  }
}
</script>