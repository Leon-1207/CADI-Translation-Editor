<template>
  <tr
    class="translation-row"
    :class="{
      'parent-key': isParent,
      'depth-0': depth === 0
    }"
    :style="{ '--depth-in-px': `${(depth - 1) * pxPerDepth}px` }"
    @click="$emit('open-edit')"
  >
    <td
      :class="{ 'parent-key': isParent }"
      class="translation-key"
      :colspan="colspan"
    >
      <span :style="{ 'padding-left': paddingLeft }">
        {{ translationKey }}
      </span>
    </td>
    <slot></slot>
  </tr>
</template>

<script>
export default {
  props: ['translationKey', 'isParent', 'path', 'value'],

  emits: ['input', 'open-edit'],

  data () {
    return {
      pxPerDepth: 20
    }
  },

  computed: {
    paddingLeft () {
      return `${this.depth * this.pxPerDepth}px`
    },
    depth () {
      return this.path.split('.').length - 1
    },
    colspan () {
      return this.isParent ? '100%' : 1
    }
  }
}
</script>

<style lang="css">
.parent-key {
  font-weight: bold;
}

.translation-row > td {
  max-width: 540px;
}

.translation-row {
  --line-color: var(--light-text);
  cursor: pointer;
  position: relative;
}
.translation-row.parent-key {
  cursor: default;
}
.translation-row td,
#edit-table th {
  padding: 1rem 0.5rem;
}

.translation-row:not(.depth-0) td:first-child::before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  height: 100%;
  transform: translateY(-50%);
  transform-origin: center;
  left: var(--depth-in-px);
  width: 17px;
  border-left: 1px solid var(--line-color);
  border-bottom: 1px solid var(--line-color);
}

.translation-row:nth-child(odd) {
  background: var(--bg-accent);
}

.translation-row:hover {
  background: #006aff1f;
}

.depth-line {
  content: '';
  height: 100%;
  border-left: 1px solid var(--line-color);
  top: 0;
  left: var(--depth-in-px-2);
  position: absolute;
}
</style>
