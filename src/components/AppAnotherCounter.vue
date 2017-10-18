<template>
  <div>
    <button class="button primary rounded" @click="asyncIncrement({by: 50, duration: 2500})">Increment</button>
    <button class="button primary rounded" @click="asyncDecrement({by: 50, duration: 2500})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['asyncIncrement', 'asyncDecrement'])
  }
}
</script>
