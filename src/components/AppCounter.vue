<template>
  <div>
    <button class="button primary rounded" @click="increment(100)">Increment</button>
    <button class="button primary rounded" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>