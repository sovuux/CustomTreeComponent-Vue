<script setup lang="ts">
defineEmits<{ (e: 'click-action'): void }>()
defineProps<{
  buttonLabel?: string
  enabled: boolean
}>()
</script>

<template>
  <button
    class="btn"
    :class="enabled ? 'btn-success' : 'btn-secondary'"
    @click="$emit('click-action')"
  >
    <slot name="icon" class="btn-item" />
    <span v-if="buttonLabel !== ''" class="btn-item">
      {{ buttonLabel }}
    </span>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-item {
    margin: 0 8px;
  }
}
</style>
