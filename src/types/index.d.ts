type WebsiteSort = WebsiteSortOld | WebsiteSortNew;

type WebsiteSortOld = {
  id: number;
  title: string;
};

type WebsiteSortNew = {
  title: string;
  /** 分类图标 emoji */
  emoji?: string;
  sites?: Omit<WebsiteItem, "sortId">[];
};

interface WebsiteItem {
  sortId: number;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  color?: string;
  /** 标签，用于筛选 */
  tags?: string[];
  /** 是否热门 */
  isHot?: boolean;
  /** 是否最新 */
  isNew?: boolean;
  /** 装饰 emoji */
  emoji?: string;
}

/** 专题/合集配置 */
interface TopicItem {
  /** 专题标题 */
  title: string;
  /** 专题描述 */
  description: string;
  /** 专题图标 emoji */
  emoji?: string;
  /** 专题包含的资源 URL 列表 */
  urls: string[];
  /** 专题背景色 */
  color?: string;
}
