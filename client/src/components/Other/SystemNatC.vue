<template>
  <div
    class="nat-w"
    v-bind:class="{ error: type == 'error', success: type == 'success' }"
  >
    <div v-if="type == 'error'">
      <span>
        <em class="fas fa-exclamation"></em>
        {{ content }}
      </span>
    </div>
    <div v-if="type == 'success'">
      <span>
        <em class="fas fa-check"></em>
        {{ content }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemNatC",
  props: ["type", "content"],
};
</script>
