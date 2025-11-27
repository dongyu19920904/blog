<script lang="ts" setup>
import {
  VNode,
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
  toRefs,
  watch,
} from "vue";
import { TabPanelProps } from "./types";

defineOptions({
  name: "Tabs",
});

const props = defineProps<{
  modelValue: TabPanelProps["name"];
}>();

const { modelValue } = toRefs(props);

// 提供当前选中的 tab name 给子组件
provide("activeTabName", modelValue);

const emits = defineEmits<{
  "update:modelValue": [value: TabPanelProps["name"]];
}>();

const instance = getCurrentInstance();
const children = ref<VNode[]>([]);
const tabsHeaderRef = ref<HTMLDivElement>();

const tabs = computed(() =>
  children.value
    .filter((child) => (child.type as any)?.name === "TabPanel")
    .map((child) => {
      const { name, label } = child.props as TabPanelProps;
      return {
        name,
        label,
      };
    })
);

const activeIndex = computed(() => {
  return tabs.value.findIndex((tab) => tab.name === modelValue.value);
});

function onTabLabelClick(name: TabPanelProps["name"]) {
  emits("update:modelValue", name);
}

function onTabsHeaderScroll() {
  const target = tabsHeaderRef.value;
  if (!target) {
    return;
  }
  const { scrollLeft, scrollWidth, clientWidth } = target;
  // 按照当前的滚动状态为元素添加 mask
  const needMask = scrollLeft > 0 || scrollWidth > clientWidth;
  if (needMask) {
    if (scrollLeft <= 0) {
      target.classList.add("tabs__header__mask-right");
      target.classList.remove(
        "tabs__header__mask-left",
        "tabs__header__mask-both"
      );
    } else if (
      scrollLeft + clientWidth >=
      scrollWidth - 4 // 4 为误差值
    ) {
      target.classList.add("tabs__header__mask-left");
      target.classList.remove(
        "tabs__header__mask-right",
        "tabs__header__mask-both"
      );
    } else {
      target.classList.add("tabs__header__mask-both");
      target.classList.remove(
        "tabs__header__mask-left",
        "tabs__header__mask-right"
      );
    }
  } else {
    target.classList.remove(
      "tabs__header__mask-left",
      "tabs__header__mask-right",
      "tabs__header__mask-both"
    );
  }
}

function onMouseWheel(e: any) {
  // 将鼠标的滚动事件转换为水平滚动
  const target = tabsHeaderRef.value;
  if (!target) {
    return;
  }
  const delta = e.deltaY;
  if (delta > 0) {
    target.scrollLeft += 20;
  } else {
    target.scrollLeft -= 20;
  }
}

function onTabsHeaderClick(e: Event) {
  const tabEl = e.target as HTMLDivElement;
  if (tabEl?.getAttribute("role") !== "tab") {
    return;
  }
  // 点击中 tab 后，将其滚动到中间
  const tabsHeaderEl = tabsHeaderRef.value;
  if (!tabsHeaderEl) {
    return;
  }
  const { scrollLeft, clientWidth: tabsHeaderClientWidth } = tabsHeaderEl;
  const { offsetLeft: tabOffsetLeft, clientWidth: tabClientWidth } = tabEl;
  // tabEl 距离滚动区域左侧边缘的距离
  const tabElToLeftEdge = tabOffsetLeft - scrollLeft;
  // tabEl 距离滚动区域右侧边缘的距离
  const tabElToRightEdge =
    tabsHeaderClientWidth - tabClientWidth - tabElToLeftEdge;
  // 如果 tab 位于边缘则选中时自动向中间滚动一定距离
  const judgeOffset = tabClientWidth / 2; // 判断是否需要滚动的偏移量
  const autoOffset = Math.min(tabClientWidth / 2, tabsHeaderClientWidth / 6); // 自动滚动的偏移量
  if (tabElToLeftEdge < judgeOffset) {
    tabsHeaderEl.scrollTo({
      left: tabOffsetLeft - autoOffset,
      behavior: "smooth",
    });
  } else if (tabElToRightEdge < judgeOffset) {
    tabsHeaderEl.scrollTo({
      left: tabOffsetLeft - tabsHeaderClientWidth + tabClientWidth + autoOffset,
      behavior: "smooth",
    });
  }
}

watch(
  () => instance?.slots.default?.(),
  (newVal) => {
    const parentNode = newVal?.[0];
    children.value = (parentNode?.children as VNode[]) || [];
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  if (tabsHeaderRef.value) {
    tabsHeaderRef.value.addEventListener("mousewheel", onMouseWheel);
    tabsHeaderRef.value.addEventListener("scroll", onTabsHeaderScroll);
    nextTick(() => {
      onTabsHeaderScroll();
    });
  }
});

onUnmounted(() => {
  if (tabsHeaderRef.value) {
    tabsHeaderRef.value.removeEventListener("mousewheel", onMouseWheel);
    tabsHeaderRef.value.removeEventListener("scroll", onTabsHeaderScroll);
  }
});
</script>

<template>
  <div class="tabs">
    <div ref="tabsHeaderRef" class="tabs__header" @click="onTabsHeaderClick">
      <div
        v-for="item in tabs"
        :key="item.name"
        role="tab"
        :class="['tab-label', { 'is-active': modelValue === item.name }]"
        @click="onTabLabelClick(item.name)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  &__header {
    position: relative;
    display: flex;
    margin: 0 calc(var(--super-mini-gap) * -1) var(--mini-gap);
    overflow-y: auto;
    // 隐藏横向滚动条
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__mask-left {
      mask-image: linear-gradient(to right, transparent, #000000 2rem);
    }
    &__mask-right {
      mask-image: linear-gradient(
        to right,
        #000000 calc(100% - 2rem),
        transparent
      );
    }
    &__mask-both {
      mask-image: linear-gradient(
        to right,
        transparent,
        #000000 2rem,
        #000000 calc(100% - 2rem),
        transparent
      );
    }
    .tab-label {
      padding: 0 var(--super-mini-gap);
      color: var(--secondary-text-color);
      min-width: 2rem;
      cursor: pointer;
      flex-shrink: 0;
      transition: color 0.2s ease;

      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 2rem;
        margin: var(--super-mini-gap) auto 0;
        background-color: var(--accent-color);
        transform: scaleX(0);
        transition: transform 0.2s ease;
        border-radius: var(--regular-border-radius);
      }
      &:hover {
        color: var(--accent-color);
      }
      &.is-active {
        color: var(--accent-color);
        font-weight: bold;
        &::after {
          transform: scaleX(1);
          box-shadow: 0 0.12rem 0.5rem rgba(168, 85, 247, 0.5);
        }
      }
    }
  }

  &__content {
    display: block;
    border-radius: var(--regular-border-radius);
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
