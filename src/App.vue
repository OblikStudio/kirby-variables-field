<template>
  <div>
    <k-text-field v-model="variableValue" @input="input" name="text" v-bind:label="displayLabel" />
    <JsonEditor v-model="mydata"></JsonEditor>
  </div>
</template>

<script>
import JsonEditor from './JsonEditor.vue'

export default {
  components: {
    JsonEditor
  },
  props: {
    value: Object,
    endpoints: Object,

    variable: String,
    label: String,
    name: String
  },
  data () {
    return {
      diskValue: null,
      variableValue: null,
      mydata: {
        foo: 'bar',
        testing: 'three',
        nested: {
          qux: 'flux'
        }
      }
      // mydata: [
      //   'test',
      //   'var',
      //   'baz'
      // ]
    }
  },
  computed: {
    language () {
      return this.$store.state.languages.current.code
    },
    displayLabel () {
      return (this.label.toLowerCase() === this.name)
        ? this.variable
        : this.label
    }
  },
  methods: {
    input (value) {
      this.variableValue = value

      if (this.variableValue !== this.diskValue) {
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
      return this.$api.get(this.endpoints.field + '/variable', {
        lang: this.language,
        key: this.variable
      }).then(data => {
        this.diskValue = data
        this.variableValue = data
      }).catch(error => {
        // variable not found
      })
    }
  },
  created () {
    this.fetchValue()
  },
  watch: {
    value (value) {
      // Since this is a fake field, it always has no value, I.E. null.
      // Whenever the value changes to null, this means the field is either
      // reverted or saved.
      if (value === null) {
        this.fetchValue()
      }
    }
  }
}
</script>