<template>
  <div>
    <table class="k-structure-table" data-sortable="true">
      <thead>
        <tr>
          <th class="k-structure-table-index">#</th>
          <th class="k-structure-table-column k-je-column-header-key">Key</th>
          <th class="k-structure-table-column">Value</th>
          <th v-if="isResizable"></th>
        </tr>
      </thead>
      <k-draggable
        element="tbody"
        :list="list"
        :handle="true"
        :options="dragOptions"
      >
        <tr v-for="(entry, index) in list">
          <td class="k-structure-table-index">
            <k-sort-handle v-if="isSortable" />
            <span class="k-structure-table-index-number">
              {{ index }}
            </span>
          </td>

          <td class="k-structure-table-column">
            <p class="k-structure-table-text">
              {{ entry.key }}
            </p>
          </td>

          <td class="k-structure-table-column">
            <p class="k-structure-table-text">
              {{ entry.value }}
            </p>
          </td>

          <td class="k-structure-table-option" v-if="isResizable">
            <k-button :tooltip="$t('remove')" icon="remove" @click="remove(key)" />
          </td>
        </tr>
      </k-draggable>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  data: function () {
    return {
      list: this.createList(this.value),
      isResizable: true,
      isSortable: true,
      isKeysEditable: false
    }
  },
  computed: {
    dragOptions: function () {
      return {
        disabled: !this.isSortable,
        fallbackClass: 'k-sortable-row-fallback'
      }
    }
  },
  methods: {
    createList: function (object) {
      return Object.keys(this.value).map(function (key) {
        return {
          key: key,
          value: this.value[key]
        }
      }.bind(this))
    },
    remove: function (key) {
      console.log('remove', key)
    }
  }
}
</script>
