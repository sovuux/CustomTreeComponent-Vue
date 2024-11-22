<script setup lang="ts">
defineEmits<{
  (e: 'close-modal'): void
  (e: 'confirm-modal'): void
}>()

defineProps<{
  modalTitle?: string
  modalVisible?: boolean
}>()
</script>

<template>
  <div class="modal-backdrop" v-if="modalVisible">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('close-modal')"
            ></button>
          </div>
          <div class="modal-body">
            <slot name="modal-body" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="$emit('close-modal')"
            >
              Закрыть
            </button>
            <button type="button" class="btn btn-success" @click="$emit('confirm-modal')">
              Ок
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  display: block;
  position: fixed;
  align-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  &-backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
