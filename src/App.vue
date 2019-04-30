<template>
  <div>
    <k-info-field v-if="!initialLoad" :label="label" :text="$t('loading') + '&hellip;'" theme="info" />
    <k-info-field v-else-if="error" :label="label" :text="error" theme="negative" />
    <template v-else>
      <JsonEditor
        v-if="variableValue && typeof variableValue === 'object'"
        :name="label"
        :value="variableValue"
        :options="editorOptions"
        @input="input"
      ></JsonEditor>
      <k-text-field
        v-else
        :label="label"
        :value="variableValue"
        @input="input"
        name="text"
      />
    </template>
  </div>
</template>

<script>
import JsonEditor from './editor/JsonEditor.vue'

export default {
  components: {
    JsonEditor
  },
  props: {
    value: Object,
    endpoints: Object,

    variable: String,
    editor: Object,
    label: String,
    name: String,

    editable: Boolean,
    resizable: Boolean,
    sortable: Boolean,
    keys: Boolean
  },
  data () {
    return {
      error: null,
      initialLoad: false,
      diskValue: null,
      variableValue: null,
      editorOptions: {
        isKeysEditable: this.editor.keys,
        isValuesEditable: this.editor.values,
        isMutatable: this.editor.mutate,
        isSortable: this.editor.sort
      }
    }
  },
  computed: {
    language () {
      return this.$store.state.languages.current.code
    }
  },
  methods: {
    input (value) {
      this.variableValue = value

      if (JSON.stringify(this.variableValue) !== JSON.stringify(this.diskValue)) {
        this.$emit('input', {
          lang: this.language,
          value: this.variableValue
        })
      } else {
        // Reset the field so that the Save/Reject dialog hides.
        this.$emit('input', null)
      }
    },
    fetchValue () {
      var query = {
        lang: this.language
      }

      if (this.variable) {
        query.key = this.variable
      }

      return this.$api.get(this.endpoints.field + '/variables', query).then(function (data) {
        data = data || {} // use an Object in JSON editor when no variables available
        this.diskValue = data
        this.variableValue = data

        if (this.value) {
          // If there's an initial value, then there was an unsaved change.
          this.variableValue = this.value.value
        }
      }.bind(this)).catch(function (error) {
        this.error = 'Could not find variable: ' + query.key
      }.bind(this)).then(function () {
        this.initialLoad = true
      }.bind(this))
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (value) {
        // Since this is a fake field, it always has no value, I.E. null.
        // Whenever the value changes to null, this means the field is either
        // reverted or saved.
        if (value === null) {
          this.fetchValue()
        } else {
          this.variableValue = value.value // load unsaved value
        }
      }
    },
    language: function (value) {
      this.fetchValue()
    }
  }
}
</script>