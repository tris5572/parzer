// export const Paths = {
//   Index: "/",
//   Parts: "/parts",
// } as const;

// export type Paths = (typeof Paths)[keyof typeof Paths];

export const Pages = {
  Index: "/",
  Activities: "/activities",
  Parts: "/parts",
} as const;
export type Pages = (typeof Pages)[keyof typeof Pages];

/**
 * パーツの種類
 */
// export const PartsKind = {
//   Frame: "frame",
//   HandleBar: "handle-bar",
//   FrontWheel: "front-wheel",
//   RearWheel: "rear-wheel",
//   FrontTire: "front-tire",
//   RearTire: "rear-tire",
//   Shoes: "shoes",
// } as const;
// export type PartsKind = (typeof PartsKind)[keyof typeof PartsKind];
