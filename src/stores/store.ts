import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const folderId = ref<number | string>()

  return { folderId }
})
