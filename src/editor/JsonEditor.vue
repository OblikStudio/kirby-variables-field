<template>
  <div>
    <header class="k-field-header">
      <label class="k-field-label" @click.prevent="">
        <template v-for="entry in displayPath">
          <template v-if="entry.index < path.length - 1">
            <button class="k-je-label-button" @click="openPath(entry.index)">
              {{ entry.name }}
            </button><span class="k-je-separator">/</span>
          </template>
          <span v-else>{{ entry.name }}</span>
        </template>
      </label>
    </header>

    <component
      :is="isArray(currentObject) ? 'ArrayTable' : 'ObjectTable'"
      :options="options"
      :value="currentObject"
      @input="input"
      @open="openKey"
    ></component>
  </div>
</template>

<script>
import { cloneDeep, get } from 'lodash'
import ObjectTable from './ObjectTable.vue'
import ArrayTable from './ArrayTable.vue'

export default {
  components: {
    ObjectTable,
    ArrayTable
  },
  props: {
    value: Object,
    resizable: Boolean,
    name: {
      type: String,
      default: 'Root'
    },
    options: {
      type: Object,
      default: {
        isEditable: true,
        isResizable: true,
        isSortable: true,
        isKeysEditable: false
      }
    }
  },
  data: function () {
    return {
      data: null,
      path: []
    }
  },
  computed: {
    currentObject: function () {
      var object = this.data

      this.path.forEach(function (key) {
        object = object[key]
      })

      return object
    },
    displayPath: function () {
      var path = this.path.map(function (name, index) {
        return {
          name: name,
          index: index
        }
      })

      path.unshift({
        name: this.name,
        index: -1
      })

      return path
    }
  },
  methods: {
    isArray: Array.isArray,
    openKey: function (key) {
      this.path.push(key)
    },
    openPath: function (index) {
      this.path.splice(index + 1)
    },
    input: function (value) {
      var parentPath = this.path.slice()
      var childKey = parentPath.pop()
      var parent = parentPath.length
        ? get(this.data, parentPath)
        : this.data

      if (parent && childKey) {
        parent[childKey] = value
      } else {
        this.data = value
      }

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
