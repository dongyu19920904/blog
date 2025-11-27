<script lang="ts" setup>
import { computed, onMounted, ref, toRefs, watch } from "vue";
import Drawer from "@/components/basic/Drawer.vue";
import { UpOutlined } from "@ant-design/icons-vue";
import Tabs from "@/components/basic/Tabs/index.vue";
import TabPanel from "@/components/basic/Tabs/TabPanel.vue";
import GLOBAL_CONFIG from "@/config";
import { TabPanelProps } from "./basic/Tabs/types";
import WebsiteItem from "./basic/WebsiteItem.vue";
import useMouseWheel from "@/hooks/useMouseWheel";
import useTouch from "@/hooks/useTouch";
import { isWebsiteSortsOld } from "@/utils/typeDefender";

type WebsiteConfig = WebsiteSortNew;

defineOptions({
  name: "WebsiteDrawer",
});

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const { modelValue } = toRefs(props);
const activeTabs = ref<TabPanelProps["name"]>(0);
const websiteSorts = ref<WebsiteSort[]>([]);
const websiteItems = ref<WebsiteItem[]>([]);
const topics = ref<TopicItem[]>([]);
const disableUserActionInput = ref(false);
const searchKeyword = ref<string>("");
const activeTag = ref<string | null>(null);

const websiteConfig = computed<WebsiteConfig[]>(() => {
  if (isWebsiteSortsOld(websiteSorts.value, websiteItems.value)) {
    return websiteSorts.value.map((sort: any) => {
      return {
        ...sort,
        sites:
          websiteItems.value.filter((item: any) => item.sortId === sort.id) ||
          [],
      };
    });
  } else {
    return websiteSorts.value;
  }
});

const hotWebsites = computed<Omit<WebsiteItem, "sortId">[]>(() => {
  const result: Omit<WebsiteItem, "sortId">[] = [];
  websiteConfig.value.forEach((sort: any) => {
    sort.sites?.forEach((site: any) => {
      if (site.isHot) {
        result.push(site);
      }
    });
  });
  return result.slice(0, 6);
});

const newWebsites = computed<Omit<WebsiteItem, "sortId">[]>(() => {
  const result: Omit<WebsiteItem, "sortId">[] = [];
  websiteConfig.value.forEach((sort: any) => {
    sort.sites?.forEach((site: any) => {
      if (site.isNew) {
        result.push(site);
      }
    });
  });
  return result.slice(0, 6);
});

const activeTags = computed<string[]>(() => {
  const currentIndex = Number(activeTabs.value);
  const current = websiteConfig.value[currentIndex];
  if (!current?.sites) return [];
  const tagSet = new Set<string>();
  current.sites.forEach((site: Omit<WebsiteItem, "sortId">) => {
    site.tags?.forEach((tag: string) => tagSet.add(tag));
  });
  return Array.from(tagSet).slice(0, 10);
});

function filterSites(sites: Omit<WebsiteItem, "sortId">[] = []) {
  const keyword = searchKeyword.value.trim().toLowerCase();
  return sites.filter((site) => {
    const matchKeyword =
      !keyword ||
      site.title.toLowerCase().includes(keyword) ||
      (site.description ?? "").toLowerCase().includes(keyword) ||
      (site.tags ?? []).some((tag) => tag.toLowerCase().includes(keyword));
    const matchTag =
      !activeTag.value || (site.tags ?? []).includes(activeTag.value);
    return matchKeyword && matchTag;
  });
}

function onTagClick(tag: string) {
  activeTag.value = activeTag.value === tag ? null : tag;
}

function clearFilter() {
  searchKeyword.value = "";
  activeTag.value = null;
}

useMouseWheel({
  disable: disableUserActionInput,
  onWheelUp() {
    emit("update:modelValue", true);
  },
});

useTouch({
  disable: disableUserActionInput,
  onSlideUp() {
    emit("update:modelValue", true);
  },
});

function onDrawerHandlerClick() {
  emit("update:modelValue", true);
}

function getWebsiteDrawerData() {
  websiteSorts.value = GLOBAL_CONFIG.WEBSITE_SORTS;
  websiteItems.value = GLOBAL_CONFIG.WEBSITE_ITEMS;
  topics.value = GLOBAL_CONFIG.TOPICS || [];
}

watch(
  modelValue,
  (newVal: boolean) => {
    disableUserActionInput.value = newVal;
  },
  { immediate: true }
);

onMounted(() => {
  getWebsiteDrawerData();
});
</script>

<template>
  <section class="website-drawer">
    <!-- Drawer 打开开关 -->
    <div class="drawer-handler" @click="onDrawerHandlerClick">
      <span class="drawer-handler__icon">
        <up-outlined />
      </span>
      <span class="drawer-handler__text slide-up">👆 上滑探索</span>
      <span class="drawer-handler__text wheel-up">🖱️ 滚轮向上</span>
    </div>
    <!-- Drawer -->
    <Drawer
      :model-value="modelValue"
      class="website-drawer__drawer"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <div class="website-drawer__filter">
        <div class="filter-bar">
          <input
            v-model="searchKeyword"
            type="search"
            class="filter-bar__input"
            placeholder="当前栏目里搜：站点名 / 关键词 / 标签"
          />
          <button
            v-if="searchKeyword || activeTag"
            type="button"
            class="filter-bar__clear"
            @click="clearFilter"
          >
            重置
          </button>
        </div>
      </div>

      <Tabs v-model="activeTabs">
        <TabPanel
          v-for="(config, index) in websiteConfig"
          :key="index"
          :name="index"
          :label="config.title"
          :class="{
            'empty-panel': !config.sites?.length,
          }"
        >
          <template v-if="config.sites?.length">
            <template v-if="filterSites(config.sites).length">
              <WebsiteItem
                v-for="(website, subIndex) in filterSites(config.sites)"
                :key="subIndex"
                :item="website"
              />
            </template>
            <div v-else>😥 这里暂时空空的，换个关键词 / 标签试试？</div>
          </template>
          <div v-else>😥 这里还在施工中，欢迎来提资源</div>
        </TabPanel>
      </Tabs>
    </Drawer>
  </section>
</template>

<style lang="scss" scoped>
.website-drawer {
  .drawer-handler {
    position: absolute;
    color: #fff;
    bottom: 5vh;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    &__icon {
      transform: scale(1.2, 0.8);
    }
    &__text {
      font-size: var(--regular-font-size);
      margin-top: var(--mini-gap);
      animation: float 4s infinite ease-in-out;

      &.slide-up {
        @media (any-hover: hover) {
          display: none;
        }
      }

      &.wheel-up {
        @media (hover: none) {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.website-drawer__drawer {
  .drawer__content {
    .website-drawer__topics {
      margin-bottom: var(--regular-gap);
      padding: 0.5rem 0.75rem;
      border-radius: var(--regular-border-radius);
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.35);
      backdrop-filter: blur(12px);

      .topics-header {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        margin-bottom: 0.5rem;

        &__icon {
          font-size: 0.9rem;
        }

        &__title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--regular-text-color);
        }

        &__divider {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(148, 163, 184, 0.4),
            transparent
          );
          margin-left: 0.5rem;
        }
      }

      .topics-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      .topic-chip {
        border: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.3rem 0.65rem;
        border-radius: 999px;
        background: linear-gradient(
          135deg,
          rgba(168, 85, 247, 0.1),
          rgba(236, 72, 153, 0.1)
        );
        border: 1px solid rgba(168, 85, 247, 0.25);
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.2),
            rgba(236, 72, 153, 0.2)
          );
          border-color: rgba(168, 85, 247, 0.4);
        }
      }

      .topic-chip__emoji {
        font-size: 0.9rem;
      }

      .topic-chip__text {
        color: var(--regular-text-color);
      }
    }

    .website-drawer__filter {
      margin-bottom: var(--regular-gap);
      padding: 0.6rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      border-radius: var(--regular-border-radius);
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.35);
      backdrop-filter: blur(12px);

      .filter-bar {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        &__input {
          flex: 1;
          padding: 0.35rem 0.6rem;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          font-size: 0.85rem;
          outline: none;
        }

        &__clear {
          border: none;
          outline: none;
          font-size: 0.8rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          background-color: #f3f4f6;
          cursor: pointer;
        }
      }

      .filter-tags {
        display: flex;
        flex-wrap: nowrap;
        gap: 0.35rem;
        overflow-x: auto;
        padding-bottom: 0.1rem;
      }

      .filter-tag {
        white-space: nowrap;
        font-size: 0.75rem;
        padding: 0.15rem 0.5rem;
        border-radius: 999px;
        border: 1px solid #e5e7eb;
        background-color: #ffffff;
        cursor: pointer;

        &.is-active {
          background-image: linear-gradient(
            135deg,
            var(--accent-color),
            #ec4899
          );
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 0.12rem 0.5rem rgba(168, 85, 247, 0.45);
        }
      }
    }

    .tabs__header {
      width: calc(100% - 1.2rem);
    }
    .tabs__content {
      height: calc(var(--vh, 1vh) * 60);

      .tab-panel {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: var(--mini-gap);
        align-items: flex-start;

        @media screen and (min-width: 480px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 768px) {
          grid-template-columns: repeat(4, 1fr);
        }

        &.empty-panel {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-text-color);
        }
      }
    }
  }
}
</style>
