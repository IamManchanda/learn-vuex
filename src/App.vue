<template>
  <div class="grid-container margin-top-1">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell medium-7">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" :value="value" @input="updateValue">
        <p>
          {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppCounter from './components/AppCounter.vue';
import AppAnotherCounter from './components/AppAnotherCounter.vue';
import AppResult from './components/AppResult.vue';
import AppAnotherResult from './components/AppAnotherResult.vue';

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    AppCounter, AppAnotherCounter, AppResult, AppAnotherResult
  }
}
</script>