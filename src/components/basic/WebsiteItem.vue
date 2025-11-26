<script lang="ts" setup>
defineOptions({
  name: "WebsiteItem",
});

defineProps<{
  item: Omit<WebsiteItem, "sortId">;
}>();
</script>

<template>
  <a :href="item.url" target="_blank" class="website-item">
    <!-- 热门/最新标签 -->
    <div v-if="item.isHot || item.isNew" class="website-item__badges">
      <span v-if="item.isHot" class="badge badge--hot">🔥 热门</span>
      <span v-if="item.isNew" class="badge badge--new">✨ 最新</span>
    </div>
    <div class="website-item__info">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description || `网站链接: ${item.url}` }}
      </div>
      <!-- 标签展示 -->
      <div v-if="item.tags?.length" class="tags">
        <span v-for="tag in item.tags.slice(0, 3)" :key="tag" class="tag"
          >#{{ tag }}</span
        >
      </div>
    </div>
    <div
      class="website-item__logo"
      :style="{
        backgroundColor: item.color || (item.icon ? undefined : '#bcbcbc'),
      }"
    >
      <img
        v-if="item.icon"
        class="site-logo"
        :src="item.icon"
        :alt="item.title"
      />
      <span v-else class="site-default-logo">{{
        item.emoji || item.title.slice(0, 1)
      }}</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
$text-line-height: 1.4rem;

.website-item {
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: var(--regular-border-radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  min-height: calc(
    $text-line-height + var(--super-mini-gap) + $text-line-height * 2
  );
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  @media (any-hover: hover) {
    &:hover {
      border-color: var(--primary-color);
      box-shadow: 0 0.15rem 0.8rem rgba(34, 197, 94, 0.35);
    }
  }

  &:active {
    border-color: var(--primary-color);
    box-shadow: inset 0px 0px 0.3rem 0px rgba(0, 0, 0, 0.3);
    transform: scale(0.99);
  }

  &__badges {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    display: flex;
    gap: 0.25rem;
    z-index: 1;
    .badge {
      font-size: 0.65rem;
      padding: 0.1rem 0.35rem;
      border-radius: 0.25rem;
      font-weight: 500;
      &--hot {
        background: linear-gradient(135deg, #fb923c, #ef4444);
        color: #fff;
      }
      &--new {
        background: linear-gradient(135deg, var(--primary-color), #16a34a);
        color: #fff;
      }
    }
  }

  &__info {
    flex: 1;
    overflow: hidden;
    margin-right: 0.4rem;
    .title {
      margin-bottom: var(--super-mini-gap);
      // 文本最多一行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: $text-line-height;
      font-weight: 500;
    }
    .description {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      // 文本最多两行
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: $text-line-height;
      height: $text-line-height * 2;
    }
    .tags {
      display: flex;
      gap: 0.3rem;
      margin-top: 0.3rem;
      flex-wrap: wrap;
      .tag {
        font-size: 0.7rem;
        color: #4b5563;
        background: rgba(59, 130, 246, 0.08);
        padding: 0.1rem 0.4rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(59, 130, 246, 0.18);
      }
    }
  }

  &__logo {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    position: relative;
    .site-logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    .site-default-logo {
      font-size: 2rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
