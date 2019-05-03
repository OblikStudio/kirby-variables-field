<template>
  <JsonEditor
    v-if="data && typeof data === 'object'"
    v-model="data"
    :label="label"
    :options="editorOptions"
    @input="emitInput"
  ></JsonEditor>

  <k-text-field
    v-else
    v-model="data"
    :label="label"
    @input="emitInput"
  />
</template>

<script>
import { cloneDeep } from 'lodash-es'
import JsonEditor from './editor/JsonEditor.vue'

export default {
  components: {
    JsonEditor
  },
  props: {
    value: Object,
    endpoints: Object,
    label: String,

    variable: String,
    editor: Object
  },
  data () {
    return {
      data: cloneDeep(this.value),
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
    value: function (value) {
      this.data = cloneDeep(value)
    }
  }
}
</script>