<template>
  <div>
    <header class="k-field-header">
      <label class="k-field-label">Benefits</label>
      <k-button icon="add">Add</k-button>
    </header>

    <ObjectTable v-model="value"></ObjectTable>
  </div>
</template>

<script>
import ObjectTable from './ObjectTable.vue'

export default {
  components: {
    ObjectTable
  },
  props: {
    value: Object
  }
}
</script>
