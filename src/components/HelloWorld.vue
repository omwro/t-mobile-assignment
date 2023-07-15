<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <section id="hello-world-section" class="section">
    <div class="container">
      <div class="row">
        <div class="column">
          <h2 class="section-heading">{{ msg }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p>
            Recommended IDE setup:
            <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
          </p>
          <p>See <code>README.md</code> for more information.</p>
          <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
              Vite Docs
            </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
          </p>
          <button type="button" @click="count++" class="button-primary">count is: {{ count }}</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test hot module replacement.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
