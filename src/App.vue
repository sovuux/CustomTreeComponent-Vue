<script setup lang="ts">
import CustomButton from '@/components/functional/button/CustomButton.vue'
import CustomModal from '@/components/functional/modal/CustomModal.vue'
import { ref } from 'vue'
import CustomTreeSelect from '@/components/functional/treeSelect/CustomTreeSelect.vue'
import { mockFolders } from '@/data/mockFolders'
import type { Folder } from '@/types/folder'
import { useStore } from '@/stores/store'

const store = useStore()

const folders: Folder[] = mockFolders

const isModalVisible = ref<boolean>(false)

const toggleModalVisible = (): void => {
  isModalVisible.value = !isModalVisible.value
}

const confirm = (): void => {
  console.log('confirm')
  toggleModalVisible()
}

const getSelectedId = (id: number | string): void => {
  store.folderId = id
  console.log('Selected Id:', store.folderId)
}
</script>

<template>
  <div class="container justify-content-center align-items-center">
    <CustomButton :enabled="true" :button-label="'Открыть'" @click-action="toggleModalVisible">
      <template #icon>
        <i class="pi pi-folder-plus" />
      </template>
    </CustomButton>
  </div>
  <CustomModal
    :modal-title="'Компонент дерева'"
    :modal-visible="isModalVisible"
    @close-modal="toggleModalVisible"
    @confirm-modal="confirm"
  >
    <template #modal-body>
      <CustomTreeSelect
        :items="folders"
        id-key="id"
        name-key="name"
        children-key="children"
        @update:selected-item-id="getSelectedId"
      />
    </template>
  </CustomModal>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  height: 100%;
  display: flex;
}
</style>
