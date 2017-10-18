<template>
  <p>This Counter is: {{ calculationCounter }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['calculationCounter'])
  }
}
</script>