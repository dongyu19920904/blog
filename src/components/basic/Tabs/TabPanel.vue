<script lang="ts" setup>
import { computed, inject, Ref } from "vue";
import { TabPanelProps } from "./types";

defineOptions({
  name: "TabPanel",
});

const props = defineProps<TabPanelProps>();

// 从父组件 Tabs 注入当前选中的 tab name
const activeTabName = inject<Ref<TabPanelProps["name"]>>("activeTabName");

const isActive = computed(() => activeTabName?.value === props.name);
</script>

<template>
  <div v-show="isActive" class="tab-panel">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tab-panel {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
}
</style>
