// ルーティングパス Enum
export enum Path {
  TOP = 'top',
  CATEGORY_AI = 'category/ai',
  CATEGORY_BIG_DATA = 'category/big-data',
  CATEGORY_CODING = 'category/coding',
  CATEGORY_ECONOMY = 'category/economy',
  CATEGORY_MATH = 'category/math',
  CATEGORY_SOCCER = 'category/soccer',
  CATEGORY_WEB = 'category/web',
}

// 表示モード Enum
export enum DisplayModeType {
  DEFAULT = 0,
  WEB = 1,
  SOCCER = 2,
  BIG_DATA = 3,
  CODING = 4,
  MATH = 5,
  ECONOMY = 6,
  AI = 7,
}

// 初回表示制御 Enum
export enum IntroDisplayType {
  NONE_DISPLAYED = 0,
  DISPLAYED = 1,
}

// Playing管理 Enum
export enum PlayingManagerType {
  NONE_DISPLAYED_NUMBER = 0,
}
