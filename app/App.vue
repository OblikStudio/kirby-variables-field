<template>
  <k-json-editor
    v-if="data && typeof data === 'object'"
    v-model="data"
    :label="label"
    :options="editorOptions"
    @input="emitInput"
  ></k-json-editor>

  <k-text-field
    v-else
    v-model="data"
    icon="wand"
    :label="label"
    :placeholder="variable"
    @input="emitInput"
  />
</template>

<script>
import { cloneDeep } from 'lodash-es'

export default {
  props: {
    value: Object,
    endpoints: Object,
    label: String,

    variable: String,
    editor: Object
  },
  data () {
    return {
      data: null,
      editorOptions: {
        isKeysEditable: this.editor.keys,
        isValuesEditable: this.editor.values,
        isMutatable: this.editor.mutate,
        isSortable: this.editor.sort
      }
    }
  },
  methods: {
    emitInput () {
      this.$emit('input', this.data)
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (value) {
        this.data = cloneDeep(value)
      }
    }
  }
}
</script>