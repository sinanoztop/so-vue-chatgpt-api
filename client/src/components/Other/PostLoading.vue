<template>
  <div class="loading-text">
    <span class="spin"></span>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "PostLoading",
  props: ["content"],
};
</script>
