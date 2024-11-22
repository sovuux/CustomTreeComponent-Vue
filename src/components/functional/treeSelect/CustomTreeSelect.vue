<template>
  <ul class="list-group">
    <li
      v-for="item in items"
      :key="item[idKey]"
      class="list-group-item ul-text"
      @click.stop="toggleItem(item[idKey])"
      @click="selectItem(item[idKey])"
    >
      <div
        class="d-flex align-items-center"
        :class="{ 'text-primary fw-bold': item[idKey] === selectedItemId }"
      >
        <span class="me-2">
          {{ isOpen(item[idKey]) ? '📂' : '📁' }}
        </span>
        <span class="ul-text">{{ item[nameKey] }}</span>
      </div>
      <CustomTreeSelect
        v-if="item[childrenKey] && item[childrenKey].length && isOpen(item[idKey])"
        :items="item[childrenKey]"
        :id-key="idKey"
        :name-key="nameKey"
        :children-key="childrenKey"
        :selected-item-id="selectedItemId"
        @update:selected-item-id="$emit('update:selected-item-id', $event)"
        class="ms-4"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  items: Array<Record<string, any>>
  idKey: string
  nameKey: string
  childrenKey: string
  selectedItemId?: number | string
}>()

const emit = defineEmits<{
  (e: 'update:selected-item-id', id: number | string): void
}>()

const openItems = ref<Set<number | string>>(new Set())

const isOpen = (id: number | string) => openItems.value.has(id)
const toggleItem = (id: number | string) => {
  if (isOpen(id)) {
    openItems.value.delete(id)
  } else {
    openItems.value.add(id)
  }
}

const selectItem = (id: number | string) => {
  emit('update:selected-item-id', id)
}
</script>

<style scoped>
.ms-4 {
  margin-left: 1.5rem !important;
}
.ul-text {
  cursor: pointer;
  user-select: none;
  font-size: 1.2rem;
  padding: 6px;
}
</style>
